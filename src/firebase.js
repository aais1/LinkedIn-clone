// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setPersistence ,browserSessionPersistence,getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOuhmSx1m9ymgBsiZ3ow1NjPb7KrbPkI",
  authDomain: "linkedin-48058.firebaseapp.com",
  projectId: "linkedin-48058",
  storageBucket: "linkedin-48058.appspot.com",
  messagingSenderId: "136547178845",
  appId: "1:136547178845:web:0bdd382f4c9711247330b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
setPersistence(auth, browserSessionPersistence);
// const googleProvider = new GoogleAuthProvider();

export {auth}