import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage

const firebaseConfig = {
  apiKey: "AIzaSyBNspbxFIj9QYMv5N5vhpBuywvAqyWPlQ4",
  authDomain: "meriaawaz-d30b2.firebaseapp.com",
  projectId: "meriaawaz-d30b2",
  storageBucket: "meriaawaz-d30b2.appspot.com",
  messagingSenderId: "914564645640",
  appId: "1:914564645640:web:32edac15f541366c9ce2bd",
  measurementId: "G-PD0CMC4FFZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore
export const storage = getStorage(app); // Export Storage
