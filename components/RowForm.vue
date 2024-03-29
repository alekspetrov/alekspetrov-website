<script setup lang="ts">
const email = ref(null)
const isPending = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref(null)
const errorCode = ref(null)

const handleSubmit = async () => {
  errorMessage.value = null
  isPending.value = true

  const { data } = await useFetch('/api/emails/add', {
    method: 'POST',
    body: {
      email: email.value,
    },
  })

  // If 500 unexpected error
  if (!data.value) {
    errorMessage.value = 'Server error happened.'
    errorCode.value = 'UNEXPECTED_ERROR'
    isPending.value = false
    return
  }

  // If 409 Conflict in DB
  if (data.value.data?.error) {
    errorMessage.value = data.value.data.error.code
    errorCode.value = data.value.data.error.code
    isPending.value = false
    return
  }

  // If 200 OK
  if (data.value.status === 200) {
    errorMessage.value = null
    errorCode.value = null
    isPending.value = false
    isSubmitted.value = true
  }
}

const validateEmail = () => {
  const emailFormat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!email.value) {
    errorMessage.value = 'Let me know your email address please'
    return
  }

  if (!email.value.match(emailFormat)) {
    errorMessage.value = 'Check your email should looks like email@domain.com'
    return
  }

  handleSubmit()
}
</script>

<template>
  <div class="form">
    <h3 class="form-title">Subscribe for updates</h3>
    <div v-if="isSubmitted" class="form-row">
      <p>Thank you for subscription! Check your email please.</p>
    </div>
    <div
      v-if="errorCode === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS'"
      class="form-row"
    >
      <p>
        You're already on the list!
        <NuxtLink to="/issues" class="link">Don’t get emails? </NuxtLink>
      </p>
    </div>
    <form v-if="!isSubmitted && !errorCode" @submit.prevent="validateEmail">
      <div class="form-row">
        <input
          v-model.trim="email"
          class="form-input"
          type="email"
          placeholder="Your email address"
        />
        <button>
          {{ isPending ? '…' : '⏎' }}
        </button>
      </div>
      <div v-if="errorMessage" class="form-error-text">
        {{ errorMessage }}
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
