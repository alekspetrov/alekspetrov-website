<script setup lang="ts">
const email = ref(null)
const submitting = ref(false)
const submitted = ref(false)
const emailExist = ref(false)
const formError = ref(null)

const validateEmail = (cb) => {
  const emailFormat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!email.value) {
    formError.value = 'Let me know your email address please'
    return
  }

  if (!email.value.match(emailFormat)) {
    formError.value = 'Check your email should looks like email@domain.com'
    return
  }

  cb()
}

const handleSubmit = async () => {
  submitting.value = true

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
    formError.value = 'Service is not responding. Please try again later.'
  }

  if (data.value.status === 400) {
    submitting.value = false
    formError.value = 'Check your email should looks like email@domain.com'
  }

  if (data.value.status === 409) {
    submitting.value = false
    emailExist.value = true
  }
}
</script>

<template>
  <hr />
  <div class="form">
    <h3>Subscribe for updates</h3>

    <div v-if="submitted" class="form-row">
      <p>Thank you for subscription! Check your email please.</p>
    </div>
    <div v-if="emailExist" class="form-row">
      <p>
        You're already on the list!
        <NuxtLink to="/issues" class="link">Don’t get emails? </NuxtLink>
      </p>
    </div>

    <form
      v-if="!submitted && !emailExist"
      @submit.prevent="validateEmail(handleSubmit)"
    >
      <div class="form-row">
        <input
          v-model.trim="email"
          class="form-input"
          type="email"
          placeholder="Your email address"
        />
        <button class="button-ghost">
          {{ submitting ? '…' : 'Subscribe' }}
        </button>
      </div>
      <div v-if="formError" class="form-error-text">
        {{ formError }}
      </div>
    </form>
  </div>
</template>

<style lang="postcss">
.form {
  margin-block: calc(var(--space-lg) * 4);

  > h3 {
    margin-bottom: var(--space-sm);
  }

  div {
    height: 40px;
    display: flex;
    align-items: center;

    > p {
      margin: 0;
    }
  }

  input {
    box-sizing: border-box;
    flex: 1;
    max-width: 320px;
    padding: 4px 16px;
    background: rgba(255, 255, 255, 0.03);
    caret-color: var(--gray-300);
    font-size: var(--text-sm);
    border: 1px solid var(--gray-950);
    border-radius: 4px;
    margin-right: var(--space-md);
    transition: all var(--transition);
    color: var(--gray-300);

    &::placeholder {
      color: var(--gray-300);
    }

    &:hover {
      color: var(--gray-300);
      border: 1px solid var(--gray-800);
    }

    &:focus {
      outline: none;
      color: var(--gray-300);
      border: 1px solid var(--gray-800);
    }
  }
}

.form-error-text {
  font-size: var(---text-sm);
}
</style>
