import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9CzsdZLIXuiLvDMgViPdI919gUxmPvcA",
  authDomain: "nneuidhd.firebaseapp.com",
  projectId: "nneuidhd",
  storageBucket: "nneuidhd.appspot.com",
  messagingSenderId: "198768930052",
  appId: "1:198768930052:web:ba3b58f9935a65cfd4b451"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Services
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db, auth
}