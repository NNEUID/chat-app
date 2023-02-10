import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from "vue";

const error = ref(null)

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential);
  } catch (err) {
    error.value = err.message
  }
}

const useLogin = () => {
  return (error, login)
}

export default useLogin