// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "global-terrain-419715.firebaseapp.com",
  projectId: "global-terrain-419715",
  storageBucket: "global-terrain-419715.appspot.com",
  messagingSenderId: "129417134389",
  appId: "1:129417134389:web:14a84f5637ff087c814c7c",
  measurementId: "G-BJTQ4WSYL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);


export {auth,googleProvider,db}