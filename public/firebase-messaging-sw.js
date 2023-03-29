/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the // generated config
var firebaseConfig = {
  apiKey: "AIzaSyAHeF66TrE2EPTpPcGJjfQhExVodvWK16U",
  authDomain: "cp-project-2023.firebaseapp.com",
  projectId: "cp-project-2023",
  storageBucket: "cp-project-2023.appspot.com",
  messagingSenderId: "558905493631",
  appId: "1:558905493631:web:3a2df19452f0c20ca2174a",
  measurementId: "G-LKY08VTTEM"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});