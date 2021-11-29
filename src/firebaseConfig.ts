import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDm_VnaDV3rdmo61Wr95GlYtPP2RFyYPec",
  authDomain: "shoutouts-4561.firebaseapp.com",
  projectId: "shoutouts-4561",
  storageBucket: "shoutouts-4561.appspot.com",
  messagingSenderId: "633408668146",
  appId: "1:633408668146:web:394d6cfca9c310da4a2b6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
