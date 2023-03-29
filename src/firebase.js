// /* eslint-disable no-undef */
// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken} from 'firebase/messaging';



// // Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
// var firebaseConfig = {
//   apiKey: "AIzaSyAHeF66TrE2EPTpPcGJjfQhExVodvWK16U",
//   authDomain: "cp-project-2023.firebaseapp.com",
//   projectId: "cp-project-2023",
//   storageBucket: "cp-project-2023.appspot.com",
//   messagingSenderId: "558905493631",
//   appId: "1:558905493631:web:3a2df19452f0c20ca2174a",
//   measurementId: "G-LKY08VTTEM"
// };

// initializeApp(firebaseConfig);
// const messaging = getMessaging();

// export const requestForToken = () => {
//   return getToken(messaging, { vapidKey: "BP6_EQvn35u4unMcczOhrg6g6BAIPXf06uAlTjlwzyQsxUqzRT3gjpXHDGhBQvm_59TiSkRdxqk_K5xRxkSJvYA" })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         // Perform any other neccessary action with the token
//       } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//     });
// };

// onMessage(messaging, (payload) => {
// console.log("payload", payload)
//     resolve(payload);
// });