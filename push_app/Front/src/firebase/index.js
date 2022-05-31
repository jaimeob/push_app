// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import * as firebase from 'firebase/app'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBDhAyJlTYTdgz0v5ZhAHQ7onRnOErvSa8",
//   authDomain: "push-app-13b48.firebaseapp.com",
//   projectId: "push-app-13b48",
//   storageBucket: "push-app-13b48.appspot.com",
//   messagingSenderId: "941794665646",
//   appId: "1:941794665646:web:a8c7bfcf17cfe8412eb93f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



import * as firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyC0flvxdLi1WcXfx9LhRWJJb-pjFEnVuok",
    authDomain: "push-notification-reactjs.firebaseapp.com",
    projectId: "push-notification-reactjs",
    storageBucket: "push-notification-reactjs.appspot.com",
    messagingSenderId: "410451915353",
    appId: "1:410451915353:web:b536c66f587fa708a9b748"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase