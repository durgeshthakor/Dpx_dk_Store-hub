// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, orderBy, where, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// --- PASTE YOUR FIREBASE CONFIG HERE ---
const firebaseConfig = {
  apiKey: "AIzaSyDC5BptSae-IHtIUDercc8OFuysgBpoSEE",
  authDomain: "dpx-store.firebaseapp.com",
  projectId: "dpx-store",
  storageBucket: "dpx-store.firebasestorage.app",
  messagingSenderId: "211849460306",
  appId: "1:211849460306:web:6fc54e8fa35c68cedefd8b",
  measurementId: "G-601W5QN0KS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

// ADMIN SETTINGS
const ADMIN_EMAIL = "Backbanchers403@gmail.com"; // Yaha Apna Email Likho

export { auth, db, storage, provider, signInWithPopup, signOut, onAuthStateChanged, collection, addDoc, getDocs, updateDoc, doc, ref, uploadBytes, getDownloadURL, ADMIN_EMAIL, query, orderBy, where, setDoc, getDoc, onSnapshot };
