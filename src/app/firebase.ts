import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_qqkE7GD9ScA09Yfb5kUoKCRdIlTTQZU",
  authDomain: "my-nextjs-app-86391.firebaseapp.com",
  projectId: "my-nextjs-app-86391",
  storageBucket: "my-nextjs-app-86391.appspot.com",
  messagingSenderId: "93320302523",
  appId: "1:93320302523:web:29ffa48316c313de163e9e"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
