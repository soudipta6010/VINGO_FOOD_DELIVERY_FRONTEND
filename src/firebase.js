// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "vingo-food-dellivery.firebaseapp.com",
//   projectId: "vingo-food-dellivery",
//   storageBucket: "vingo-food-dellivery.firebasestorage.app",
//   messagingSenderId: "390950004355",
//   appId: "1:390950004355:web:5e61b6c9ba9cc78d1d5db6"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-dellivery.firebaseapp.com",
  projectId: "vingo-food-dellivery",
  storageBucket: "vingo-food-dellivery.firebasestorage.app",
  messagingSenderId: "390950004355",
  appId: "1:390950004355:web:5e61b6c9ba9cc78d1d5db6",
};

// Initialize Firebaseimport.meta.env.VITE_FIREBASE_APIKEY
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
