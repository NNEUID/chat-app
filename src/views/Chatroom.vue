<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from '@vue/runtime-core';
export default {
  components: {
    Navbar,
    NewChatForm,
    ChatWindow
  },
  setup() {
    const { user } = getUser()

    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        console.log('watch user: ', user.value);
        router.push({ name: 'welcome' })
      }
    })
  }
}
</script>

<style>

</style>