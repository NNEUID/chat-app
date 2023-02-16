import { db } from "@/firebase/config";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { ref } from "vue";

const getCollection = (collectionPath) => {
  const documents = ref(null)
  const error = ref(null)

  const chatsQuery = query(collection(db, collectionPath), orderBy("createdAt"))
  onSnapshot(chatsQuery, (snap) => {
    const results = []
    snap.docs.forEach(doc => {


      // code RIGHT will execute if code on LEFT is TRUE
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      documents.value = results
      error.value == null
    })
  })



}

export default getCollection