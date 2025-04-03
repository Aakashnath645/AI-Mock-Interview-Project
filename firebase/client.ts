// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5e1Nff4YVTWi88_Oke0RJFL2n7OXWP3A",
  authDomain: "prepai-939ba.firebaseapp.com",
  projectId: "prepai-939ba",
  storageBucket: "prepai-939ba.firebasestorage.app",
  messagingSenderId: "69493091285",
  appId: "1:69493091285:web:e28bed23fe9e842a86ab5c",
  measurementId: "G-FPPW1HE6CP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
