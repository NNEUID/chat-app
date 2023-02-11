import { auth } from '@/firebase/config'
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'

const user = ref()

onAuthStateChanged(auth, (_user) => {
  console.log(_user);
  user.value = _user
})