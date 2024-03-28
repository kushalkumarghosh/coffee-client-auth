// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ILE77vx3QJm6nMYWxh1BRXT1VZSj8r4",
  authDomain: "coffee-store-auth-de09d.firebaseapp.com",
  projectId: "coffee-store-auth-de09d",
  storageBucket: "coffee-store-auth-de09d.appspot.com",
  messagingSenderId: "1065849823666",
  appId: "1:1065849823666:web:2ecfba15cad4aa70ca84ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;