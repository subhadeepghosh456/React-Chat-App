import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-d9b27.firebaseapp.com",
  projectId: "react-chat-d9b27",
  storageBucket: "react-chat-d9b27.appspot.com",
  messagingSenderId: "563005092968",
  appId: "1:563005092968:web:77a8dca62e5726cf59f7dd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
