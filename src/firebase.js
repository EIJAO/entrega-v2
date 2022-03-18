// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoSjWT4a7u6gK5hgBnb-gq8iPlA1HgWrw",
  authDomain: "entregaszap-1b7b0.firebaseapp.com",
  projectId: "entregaszap-1b7b0",
  storageBucket: "entregaszap-1b7b0.appspot.com",
  messagingSenderId: "1087100284096",
  appId: "1:1087100284096:web:d60a565aeb095080309125",
  measurementId: "G-39GYHYHQZX"
};

//initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
