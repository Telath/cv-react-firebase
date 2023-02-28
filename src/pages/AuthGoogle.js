import React from 'react'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Navigation from '../components/Navigation';

const AuthGoogle = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyAHeF66TrE2EPTpPcGJjfQhExVodvWK16U",
        authDomain: "cp-project-2023.firebaseapp.com",
        projectId: "cp-project-2023",
        storageBucket: "cp-project-2023.appspot.com",
        messagingSenderId: "558905493631",
        appId: "1:558905493631:web:3a2df19452f0c20ca2174a",
        measurementId: "G-LKY08VTTEM"
      };

    firebase.initializeApp(firebaseConfig);

    var uiConfig = {
        signInSuccessUrl: '/test',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '/',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('/');
        }
      };

      // Initialize the FirebaseUI Widget using Firebase.
    //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("User :", user, "/////////////////////////")
        }else{
            console.log("User non connecté")
        }
    })

  return (
    <>
        <Navigation />
        <div id="firebaseui-auth-container"></div>
    </>
  )
}

export default AuthGoogle