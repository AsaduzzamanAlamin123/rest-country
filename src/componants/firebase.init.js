// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXdUAlQxkda0JwUYlFrz_MHz17jSaD9UM",
  authDomain: "res-default.firebaseapp.com",
  projectId: "res-default",
  storageBucket: "res-default.appspot.com",
  messagingSenderId: "598542513089",
  appId: "1:598542513089:web:9b14ed3dc38d7a5b2ef540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;


