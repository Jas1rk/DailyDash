import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQzzkDo9w4J2jz9alrXUwAC_YV-LbMZ9U",
  authDomain: "dailydash-c71bc.firebaseapp.com",
  projectId: "dailydash-c71bc",
  storageBucket: "dailydash-c71bc.firebasestorage.app",
  messagingSenderId: "705225955369",
  appId: "1:705225955369:web:28905721a0b936e3aea438",
  measurementId: "G-VJGFNLFMJL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
