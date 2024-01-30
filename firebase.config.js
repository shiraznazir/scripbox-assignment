// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhQbMwr6RpyydqusPXz5cZCx30eXWFGM",
  authDomain: "assignment-scripbox.firebaseapp.com",
  projectId: "assignment-scripbox",
  storageBucket: "assignment-scripbox.appspot.com",
  messagingSenderId: "12513480532",
  appId: "1:12513480532:web:b33214a2eb20d0191642c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
