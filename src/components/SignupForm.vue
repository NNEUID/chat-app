<template>
  <form @submit.prevent="handleSubmit()">
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required v-model="password" placeholder="Password">
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      console.log('user signed up');
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style>

</style>