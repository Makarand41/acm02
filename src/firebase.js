// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// analytics is optional — only import if you plan to use it
import { getAnalytics, isSupported } from "firebase/analytics";

/**
 * Use environment vars (Vite uses import.meta.env)
 * Locally you can create a .env file with VITE_* keys.
 *
 * Example .env (NOT committed):
 * VITE_FIREBASE_API_KEY=...
 * VITE_FIREBASE_AUTH_DOMAIN=...
 * VITE_FIREBASE_PROJECT_ID=...
 * VITE_FIREBASE_STORAGE_BUCKET=...
 * VITE_FIREBASE_MESSAGING_SENDER_ID=...
 * VITE_FIREBASE_APP_ID=...
 * VITE_FIREBASE_MEASUREMENT_ID=...
 */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // optional
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore and export them
export const auth = getAuth(app);
export const db = getFirestore(app);

// Optionally initialize Analytics if supported (safe check for SSR)
export const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      return getAnalytics(app);
    }
  } catch (err) {
    // analytics not supported in this environment (e.g., SSR)
    // fail silently
    return null;
  }
};

// If you want analytics immediately (not required), uncomment below:
// initAnalytics();
