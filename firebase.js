import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "m",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  Timestamp,
};
