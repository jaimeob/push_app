// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhAyJlTYTdgz0v5ZhAHQ7onRnOErvSa8",
  authDomain: "push-app-13b48.firebaseapp.com",
  projectId: "push-app-13b48",
  storageBucket: "push-app-13b48.appspot.com",
  messagingSenderId: "941794665646",
  appId: "1:941794665646:web:a8c7bfcf17cfe8412eb93f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app