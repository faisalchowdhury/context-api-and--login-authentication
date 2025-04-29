// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbTJSj7mwcN-G5trBNx4BNbV2wsudOwMw",
  authDomain: "auth-for-github-project.firebaseapp.com",
  projectId: "auth-for-github-project",
  storageBucket: "auth-for-github-project.firebasestorage.app",
  messagingSenderId: "31020223675",
  appId: "1:31020223675:web:183cebd86b22e09a47ad9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
