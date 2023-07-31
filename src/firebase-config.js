import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB_9XyVzgjSefZFa8ISQcgt2PmjsVqh9DU",
  authDomain: "my-blog-d094d.firebaseapp.com",
  projectId: "my-blog-d094d",
  storageBucket: "my-blog-d094d.appspot.com",
  messagingSenderId: "33717662994",
  appId: "1:33717662994:web:0abe7b78488830e86b2fcb",
  measurementId: "G-EPT23S68V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();