// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// (optional) analytics
import { getAnalytics, isSupported } from "firebase/analytics";

// --- Direct Firebase configuration (public safe) ---
const firebaseConfig = {
  apiKey: "AIzaSyA5pfvD4cwKSsbp04Mm_RlATDfmao--sOc",
  authDomain: "cost-estimation-71f51.firebaseapp.com",
  projectId: "cost-estimation-71f51",
  storageBucket: "cost-estimation-71f51.appspot.com",   // ✅ fixed
  messagingSenderId: "732810310561",
  appId: "1:732810310561:web:23033ae0b43a993f2e11e0",
  measurementId: "G-L52VCT3QP1"
};

// --- Initialize Firebase ---
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Optional: analytics (won’t break if not supported)
export const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      return getAnalytics(app);
    }
  } catch (err) {
    console.warn("Analytics not supported:", err);
    return null;
  }
};
