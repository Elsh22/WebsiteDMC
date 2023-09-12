// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "apikeyisnothere",
  authDomain: "if",
  projectId: "not",
  storageBucket: "not",
  messagingSenderId: "not",
  appId: "not",
  measurementId: "not"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
