// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "linkedin-48058.firebaseapp.com",
  projectId: "linkedin-48058",
  storageBucket: "linkedin-48058.appspot.com",
  messagingSenderId: "136547178845",
  appId: "1:136547178845:web:0bdd382f4c9711247330b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);


export {auth,googleProvider,db}