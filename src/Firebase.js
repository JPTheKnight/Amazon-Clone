import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsG-xzq36CSITTJStKYn6wEtDHk-hW_mk",
    authDomain: "challenge-43952.firebaseapp.com",
    projectId: "challenge-43952",
    storageBucket: "challenge-43952.appspot.com",
    messagingSenderId: "1005462946587",
    appId: "1:1005462946587:web:b851cdcc5b63f54b6f49be",
    measurementId: "G-T2SKDXL87R"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp, 'https://challenge-43952-default-rtdb.europe-west1.firebasedatabase.app/');
const auth = getAuth(firebaseApp);

export {db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword};