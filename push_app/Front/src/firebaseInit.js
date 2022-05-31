import * as firebase from 'firebase/app'
import { getMessaging, onMessage } from "firebase/messaging";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDhAyJlTYTdgz0v5ZhAHQ7onRnOErvSa8",
    authDomain: "push-app-13b48.firebaseapp.com",
    //databaseURL: "FROM FIREBASE CONSOLE",
    projectId: "push-app-13b48",
    storageBucket: "push-app-13b48.appspot.com",
    messagingSenderId: "941794665646",
    appId: "1:941794665646:web:a8c7bfcf17cfe8412eb93f",
    measurementId: "FROM FIREBASE CONSOLE",
};


firebase.initializeApp(firebaseConfig);

export const messaging = getMessaging();

export const publicKey = 'BMsvwwBB9mUKIFIW78yyuf2OpNhAkDevP44GePJSM2F2nur4Xre6JohlChvBxHyEB6NPly_hD6khRR5-aruxTog';



export const getMessage = onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    
    // ...
});

