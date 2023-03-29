/* eslint-disable jsx-a11y/anchor-is-valid */
// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Navigation from "../components/Navigation";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAHeF66TrE2EPTpPcGJjfQhExVodvWK16U",
  authDomain: "cp-project-2023.firebaseapp.com",
  projectId: "cp-project-2023",
  storageBucket: "cp-project-2023.appspot.com",
  messagingSenderId: "558905493631",
  appId: "1:558905493631:web:3a2df19452f0c20ca2174a",
  measurementId: "G-LKY08VTTEM"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <>
    <Navigation />
      <div className="AuthGoogleContainer">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
      </>
    );
  }

  return (
    <>
    <Navigation />
    <div className="AuthGoogleContainer">
      <div className="Profile">
        {firebase.auth().currentUser.photoURL ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            alt="profile picture"
            src={firebase.auth().currentUser.photoURL}
          />
        ) : null}
        <h2>Bienvenue {firebase.auth().currentUser.displayName}!</h2>
      </div>

      <p>
        Vous êtes connecté avec l'adresse mail :{" "}
        {firebase.auth().currentUser.email}
      </p>
      <div className="btn_link_logout">
        <a onClick={() => firebase.auth().signOut()}>Se déconnecter</a>
      </div>
    </div>
    </>
  );
}

export default SignInScreen;
