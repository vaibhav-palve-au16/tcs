// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjnubYO5fkwmuXBuA9Ud6gL_QVsSIiy28",
  authDomain: "uatcompany-9cfaf.firebaseapp.com",
  projectId: "uatcompany-9cfaf",
  storageBucket: "uatcompany-9cfaf.appspot.com",
  messagingSenderId: "948647840519",
  appId: "1:948647840519:web:78eb3d97612c56d3abd3a2",
  measurementId: "G-SW3617FQ56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);