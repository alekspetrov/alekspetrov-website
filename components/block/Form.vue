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
    <h3 class="form-title">Subscribe for updates</h3>

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
        <button>
          {{ submitting ? '…' : '⏎' }}
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
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    color: var(--color-text-base);
    background: var(--color-card-fill-hover);
    caret-color: var(--color-text-base);
    border: 0;
    border-radius: 4px;
    transition: all var(--transition);

    &::placeholder {
      color: var(--color-text-muted);
    }

    &:hover {
      background-color: var(--color-card-fill-hover);
    }

    &:focus {
      outline: none;
      color: var(--color-text-base);
      background-color: var(--color-card-fill-hover);
    }
  }

  button {
    position: absolute;
    right: var(--space-md);
    background: none;
    border: none;
    color: var(--color-text-muted);
  }
}

.form-title {
  margin-bottom: var(--space-lg);
}

.form-row {
  position: relative;
}

.form-error-text {
  font-size: var(---text-sm);
}
</style>
