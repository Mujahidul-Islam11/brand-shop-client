// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ESu0PO8RMCr3RxfUsemq42jQHpkOrFc",
  authDomain: "assignment-ten-project-91ee1.firebaseapp.com",
  projectId: "assignment-ten-project-91ee1",
  storageBucket: "assignment-ten-project-91ee1.appspot.com",
  messagingSenderId: "755641016934",
  appId: "1:755641016934:web:bffb0e11818358c9c5c3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 
