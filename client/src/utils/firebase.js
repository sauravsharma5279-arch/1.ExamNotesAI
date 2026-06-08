
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "demo1-44915.firebaseapp.com",
  projectId: "demo1-44915",
  storageBucket: "demo1-44915.firebasestorage.app",
  messagingSenderId: "894244957068",
  appId: "1:894244957068:web:3081ad67abbdc2be7d44a9",
  measurementId: "G-3ZPEL3BVEM"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}