import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7de57.firebaseapp.com",
  projectId: "reactchat-7de57",
  storageBucket: "reactchat-7de57.appspot.com",
  messagingSenderId: "186685610894",
  appId: "1:186685610894:web:8cbf186233aa09454aa2df"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


