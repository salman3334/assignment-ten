// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBKChbtlYnH5-RWxYJN1bXa62TmcoCdHGw",
//   authDomain: "assingment-ten-69855.firebaseapp.com",
//   projectId: "assingment-ten-69855",
//   storageBucket: "assingment-ten-69855.appspot.com",
//   messagingSenderId: "710348852420",
//   appId: "1:710348852420:web:3a17b475c143f4109c4d91"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;
// from your provided config (move values into .env if you want)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBKChbtlYnH5-RWxYJN1bXa62TmcoCdHGw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "assingment-ten-69855.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "assingment-ten-69855",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "assingment-ten-69855.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "710348852420",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:710348852420:web:3a17b475c143f4109c4d91"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
