// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbifuBHrCfEbufLYfysNALBO2TrkWaII",
  authDomain: "ig-2-52481.firebaseapp.com",
  projectId: "ig-2-52481",
  storageBucket: "ig-2-52481.appspot.com",
  messagingSenderId: "86786155713",
  appId: "1:86786155713:web:67e296394e411da323a040"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); //singleton pattern
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };