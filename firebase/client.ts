// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQUMufmbNLA5nIPZpz5pFBbNAI4bqXidw",
  authDomain: "preparena-533f5.firebaseapp.com",
  projectId: "preparena-533f5",
  storageBucket: "preparena-533f5.firebasestorage.app",
  messagingSenderId: "126807464139",
  appId: "1:126807464139:web:06871fb149127a93fd234e",
  measurementId: "G-C565DHWSBK"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);