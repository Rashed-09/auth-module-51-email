// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwVyKq180IP5m7Y-7aDTQ-my6ekNvM0mk",
  authDomain: "auth-module-51-email.firebaseapp.com",
  projectId: "auth-module-51-email",
  storageBucket: "auth-module-51-email.firebasestorage.app",
  messagingSenderId: "687864942755",
  appId: "1:687864942755:web:1960870f1a5cd072196f16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth