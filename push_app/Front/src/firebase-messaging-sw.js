// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
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

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
console.log("aceu")

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  console.log(notificationTitle,notificationOptions)
  debugger
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});

