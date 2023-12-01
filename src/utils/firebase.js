/* eslint-disable*/
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkmTv3eM5MoCcx1K_JGvFXvgFwhbwflSQ",
  authDomain: "pewpewgpt.firebaseapp.com",
  projectId: "pewpewgpt",
  storageBucket: "pewpewgpt.appspot.com",
  messagingSenderId: "814028406651",
  appId: "1:814028406651:web:7b4a3544d7781035d9c7de",
  measurementId: "G-SCCHMTG2G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();