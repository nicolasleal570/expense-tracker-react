import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJJ89Hbhq47_FaoLpxKIPtkgY9Oo_efeY",
  authDomain: "expense-tracker-e2833.firebaseapp.com",
  projectId: "expense-tracker-e2833",
  storageBucket: "expense-tracker-e2833.appspot.com",
  messagingSenderId: "818408265643",
  appId: "1:818408265643:web:f8cf87182abe6c943f64ee",
  measurementId: "G-TTS7D1DM78",
};

const app = firebase.initializeApp(firebaseConfig);

// Database instance
export const db = app.firestore();

// Authentication instance
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
