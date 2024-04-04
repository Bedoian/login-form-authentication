// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAGP5y9WXMbdOzyD2WrrC38KuOfkpcG0g",
  authDomain: "auth-moha-milon-47139.firebaseapp.com",
  projectId: "auth-moha-milon-47139",
  storageBucket: "auth-moha-milon-47139.appspot.com",
  messagingSenderId: "1004019891588",
  appId: "1:1004019891588:web:574b588a7e7cfcf26d71d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
