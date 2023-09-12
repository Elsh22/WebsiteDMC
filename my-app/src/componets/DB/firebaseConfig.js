// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgUG2fXYtjiEk6UPaPjZQXx7OZ8Rv7rTo",
  authDomain: "dmc-map-375617.firebaseapp.com",
  projectId: "dmc-map-375617",
  storageBucket: "dmc-map-375617.appspot.com",
  messagingSenderId: "146132890387",
  appId: "1:146132890387:web:2c78b585eef0e1086860e6",
  measurementId: "G-2MT5GW4LRB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);