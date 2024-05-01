// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "travel-blog-eb0d6.firebaseapp.com",
  projectId: "travel-blog-eb0d6",
  storageBucket: "travel-blog-eb0d6.appspot.com",
  messagingSenderId: "851176791022",
  appId: "1:851176791022:web:f57f99fe3430a2ddd38cff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
