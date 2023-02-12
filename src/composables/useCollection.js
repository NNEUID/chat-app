import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";




const useCollection = () => {

  const error = ref(null)

  const addChat = async (chat) => {
    try {
      await addDoc(collection(db, 'chats'), chat)
    } catch (err) {
      error.message = err.message
    }
  }

  return { error, sendChat }
}

export default useCollection