// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4lsSZ3ADAj6FjT-kCipsb9XjL1BUKUA",
  authDomain: "social-mediawebapp.firebaseapp.com",
  projectId: "social-mediawebapp",
  storageBucket: "social-mediawebapp.appspot.com",
  messagingSenderId: "251881896701",
  appId: "1:251881896701:web:0b3bae269d9cb0b07a1c94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
