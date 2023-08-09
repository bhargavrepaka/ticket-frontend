// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW4bkqZEmtL9YDwl4W9JUNzjK4fXr7JNw",
  authDomain: "ticket-auth-72305.firebaseapp.com",
  projectId: "ticket-auth-72305",
  storageBucket: "ticket-auth-72305.appspot.com",
  messagingSenderId: "364601963662",
  appId: "1:364601963662:web:83e9df371c1734476845df",
  measurementId: "G-LXX0MPWVJP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app)