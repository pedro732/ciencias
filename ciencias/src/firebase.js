// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCg_IjvdOeqk3JiAHtXGKWRsQ_5-RsGcMQ",
  authDomain: "ciencia-4d778.firebaseapp.com",
  projectId: "ciencia-4d778",
  storageBucket: "ciencia-4d778.appspot.com",
  messagingSenderId: "604858739211",
  appId: "1:604858739211:web:6fb5fc235c3add0bce350e",
  measurementId: "G-GFXDL692XD"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 export { app, auth };