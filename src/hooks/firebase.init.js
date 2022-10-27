// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH_zOzNt-H5T8gQxvne0uShaJ6TlCiwPQ",
  authDomain: "bhojon-39d34.firebaseapp.com",
  projectId: "bhojon-39d34",
  storageBucket: "bhojon-39d34.appspot.com",
  messagingSenderId: "216986720963",
  appId: "1:216986720963:web:f3b0520acac2e76deae076",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth(app);

// exporting auth for later use
export default auth;
