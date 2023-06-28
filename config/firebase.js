// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrE7OT0s-Yj3Ch2HbIieXqLQvGBn619Fc",
  authDomain: "bird-management-ba7ca.firebaseapp.com",
  projectId: "bird-management-ba7ca",
  storageBucket: "bird-management-ba7ca.appspot.com",
  messagingSenderId: "705375951564",
  appId: "1:705375951564:web:f89ec8b6cc9fad279f8069",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
