import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";




const useCollection = (collectionPath) => {

  const error = ref(null)

  const addChat = async (chat) => {
    error.value = null
    try {
      await addDoc(collection(db, collectionPath), chat)
    } catch (err) {
      error.message = err.message
    }
  }

  return { error, addChat }
}

export default useCollection