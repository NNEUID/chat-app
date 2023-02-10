import { ref } from "vue"
import { auth } from "@/firebase/config"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)

const signup = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
    await updateProfile(userCredential.user, { displayName })
    error.value = null

    console.log(userCredential.user);

    return userCredential

  } catch (err) {
    console.log(err.message);
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup