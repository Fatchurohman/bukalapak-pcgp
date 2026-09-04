// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6-iEAKeoUtUfUxmsXD1sMHh296JyVo-g",
  authDomain: "candi-gebang-lapak.firebaseapp.com",
  projectId: "candi-gebang-lapak",
  storageBucket: "candi-gebang-lapak.firebasestorage.app",
  messagingSenderId: "81271558870",
  appId: "1:81271558870:web:6bd654b68b00b7fbb76f77",
  measurementId: "G-GV8R59H03N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
