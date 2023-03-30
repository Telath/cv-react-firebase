/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../App.js";
import Navigation from "../components/Navigation";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AddProject from "../components/AddProject";

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

const Connected = () => {
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
      <div className="addProject">
        <AddProject />
      </div>
    </div>
    </>
  );
};

export default Connected;
