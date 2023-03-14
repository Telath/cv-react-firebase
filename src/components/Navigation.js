import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
    const navRef = useRef();
  
const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
};

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
                <li><NavLink exact="true" to="/login">Login</NavLink></li>
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