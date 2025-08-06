// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAulna8FjPntOpvKn3ixUCRO8RXkz5UpsA",
  authDomain: "mockmate-b16df.firebaseapp.com",
  projectId: "mockmate-b16df",
  storageBucket: "mockmate-b16df.firebasestorage.app",
  messagingSenderId: "406633179905",
  appId: "1:406633179905:web:c3c6ca4206ff7ca268c900",
  measurementId: "G-GZ8NNPBMMD",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
