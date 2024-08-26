// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvLSQP54ZGB4pTH0WxwzoxXIHVy6GgyeQ",
  authDomain: "netflix-gpt-6a8dd.firebaseapp.com",
  projectId: "netflix-gpt-6a8dd",
  storageBucket: "netflix-gpt-6a8dd.appspot.com",
  messagingSenderId: "842652760142",
  appId: "1:842652760142:web:ba795a3ea00627d565ab1f",
  measurementId: "G-TYMHXKQ5VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();