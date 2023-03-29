/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import firebase from "firebase/compat/app";

const Navigation = () => {
    const navRef = useRef();
  
const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
};


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

console.log(firebase.auth())

var isConnected = firebase.auth().currentUser ? 1 : 0

// Profiltag

// const [isSignedIn, setIsSignedIn] = useState(false);

// useEffect(() => {
//   const unregisterAuthObserver = firebase
//     .auth()
//     .onAuthStateChanged((user) => {
//       setIsSignedIn(!!user);
//     });
//   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
// }, []);



const navLinks = document.querySelectorAll('.responsive_nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.responsive_nav');
    nav.classList.remove('responsive_nav');
  });
});
  
    return (
      <header>
        <div className="logoDiv">
            Clément <span className="name">POUILLART</span>
        </div>
        <nav ref={navRef}>
            <ul>
                <li><NavLink exact="true" to="/">Accueil</NavLink></li>
                <li><a href="/#technologies">Technologies</a></li>
                <li><a href="/#mes-projets">Mes projets</a></li>
                <li><NavLink exact="true" to="/contact">Contact</NavLink></li>
                {
                  isConnected &&
                  <li>Bienvenue {firebase.auth().currentUser.displayName} !</li>
                }
                {
                  !isConnected &&
                <li><NavLink exact="true" to="/login">Login</NavLink></li>
                }
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
  };

export default Navigation;