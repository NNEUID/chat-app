<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from '@vue/runtime-core';
export default {
  components: {
    Navbar
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