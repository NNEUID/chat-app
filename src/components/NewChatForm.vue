<template>
  <form>
    <textarea placeholder="Type a message and hit enter to send..." v-model="message"></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const message = ref('')

    const handleSubmit = async () => {

    }

    return { message }
  }
}
</script>

<style>

</style>