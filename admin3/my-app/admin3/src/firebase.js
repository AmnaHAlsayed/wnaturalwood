// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgk0gcroPUYJjrkoAboA46hf0SRBFcQiI",
  authDomain: "shop-2c6a4.firebaseapp.com",
  projectId: "shop-2c6a4",
  storageBucket: "shop-2c6a4.appspot.com",
  messagingSenderId: "367020850550",
  appId: "1:367020850550:web:b93bd660b5a90b029e4e57",
  measurementId: "G-ZKBDJ74G8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;