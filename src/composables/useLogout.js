import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const logout = async () => {

}

const useLogout = () => {

  return { logout, error }
}

export default useLogout