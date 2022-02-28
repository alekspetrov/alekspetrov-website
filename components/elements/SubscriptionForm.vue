<script setup lang="ts">
const email = ref(null)
const submitting = ref(false)
const submitted = ref(false)
const exist = ref(false)
const formError = ref(null)

const validateEmail = () => {
  const emailFormat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!email.value) {
    formError.value = 'Hey, I can’t send updates to nowhere'
  } else {
    if (email.value.match(emailFormat)) {
      return
    } else {
      formError.value = 'Check your email looks like email@domain.com'
    }
  }
}

const handleSubmit = async () => {
  submitting.value = true

  validateEmail()

  const { data } = await useFetch('/api/emails/add', {
    method: 'POST',
    body: {
      email: email.value,
    },
  })

  if (data.value.status === 200) {
    submitting.value = false
    submitted.value = true
  }

  if (data.value.status === 500) {
    submitting.value = false
    formError.value = 'Ooops, service is not responding. Please try again'
  }

  if (data.value.status === 409) {
    submitting.value = false
    formError.value = 'Seems like you already subscribed! Check your email!'
  }
}
</script>

<template>
  <div class="subscription-form">
    <div class="inner-padding">
      <div class="subscription-form-container">
        <h3 class="subscription-form-title">Subscribe to monthly newsletter</h3>
        <div v-if="submitted" class="form-row">
          <div class="subscription-form-thankyou">
            👋 Thanks for subscription! Check your email please.
          </div>
        </div>
        <div v-if="exist" class="form-row">
          <div class="subscription-form-thankyou">
            👋 You're already on the list!
            <NuxtLink to="/" class="form-link">Don’t get emails?</NuxtLink>
          </div>
        </div>
        <form
          v-if="!submitted && !exist"
          class="form"
          @submit.prevent="handleSubmit"
        >
          <div class="form-row">
            <input
              :class="{ 'form-input-error': formError }"
              class="form-input"
              type="text"
              placeholder="Email.."
              v-model.trim="email"
            />
            <button class="form-button">
              {{ submitting ? '…' : 'Subscribe' }}
            </button>
          </div>
          <div v-if="formError" class="form-input-error-text">
            {{ formError }}
          </div>
        </form>
        <p>
          <strong>186 amazing people</strong>
          are already in&nbsp;the&nbsp;list
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.subscription-form {
  margin-bottom: var(--space-3xl);
}

.subscription-form-container {
  border-left: solid 6px var(--gray-900);
  background: var(--gray-200);
  padding-block: var(--space-lg);
  padding-inline: var(--space-lg);
}

.subscription-form-title {
  font-size: var(--text-xl);
  line-height: 1.2;
  margin-bottom: var(--space-md);
  font-weight: 600;
}

.subscription-form-thankyou {
  font-weight: 500;
  font-size: var(--text-base);
  line-height: 1.2;

  > a {
    white-space: nowrap;
  }
}

.form-row {
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: var(--space-lg);
}

.form-input {
  max-width: 386px;
  flex: 1;
  border: 1px solid var(--gray-300);
  height: calc(48px - 2px);
  border-radius: 2px;
  padding-inline: var(--space-md);
  margin-right: var(--space-md);

  &:focus {
    outline: none;
    border: 1px solid var(--gray-900);
  }
}

.form-input-error {
  border: 1px solid var(--danger);
}

.form-input-error-text {
  margin-top: var(--space-xs);
  font-size: var(--text-sm);
  color: var(--danger);
}

.form-button {
  border: 0;
  color: var(--white);
  background: var(--gray-900);
  border-radius: 2px;
  height: 48px;
  padding-inline: var(--space-lg);
  font-weight: 500;
  width: 126px;
  box-shadow: 0 4px 8px var(--gray-500);

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 4px 8px var(--gray-500);
  }

  &:active {
    box-shadow: none;
  }
}

.form-link {
  text-decoration: underline;
}

@media screen and (min-width: 860px) {
  .subscription-form-container {
    padding-left: var(--space-2xl);
    padding-right: var(--space-3xl);
  }

  .subscription-form-title {
    margin-bottom: var(--space-md);
  }
}
</style>
