// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8UGpqw7CRLpH5Wkx7VJU7ddDlTe4pqNw",
  authDomain: "dragon-news-breaking-3ddec.firebaseapp.com",
  projectId: "dragon-news-breaking-3ddec",
  storageBucket: "dragon-news-breaking-3ddec.firebasestorage.app",
  messagingSenderId: "853481107665",
  appId: "1:853481107665:web:5b6d564a994a310d6cd5f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);