// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2f4JYuS3_S3ZWnhEwkW_1zmCTBGEJL94",
  authDomain: "netflixgpt-aae39.firebaseapp.com",
  projectId: "netflixgpt-aae39",
  storageBucket: "netflixgpt-aae39.appspot.com",
  messagingSenderId: "890306969109",
  appId: "1:890306969109:web:74aa6ee3ad0501444f981c",
  measurementId: "G-H4EHVM2C0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 // eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();