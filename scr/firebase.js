// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWtHAbtIYtFf94xD9xmW5iTiFi5ter_Ec",
  authDomain: "my-projek-8dd27.firebaseapp.com",
  projectId: "my-projek-8dd27",
  storageBucket: "my-projek-8dd27.appspot.com",
  messagingSenderId: "380541202175",
  appId: "1:380541202175:web:1a6689a18c58be79cfe6ca",
  measurementId: "G-DGTVZMFNRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();