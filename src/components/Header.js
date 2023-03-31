/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import firebase from "firebase/compat/app";

const Header = () => {
    return (
        <section className="header">
            <div className="textContent">
                <h1 className="title">Clément <span className="title">POUILLART</span></h1>
                <p className="subtitle">Web développeur</p>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus id nunc gravida maximus. Morbi congue urna vitae sem blandit lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus interdum enim vitae lacus aliquet, mattis dapibus eros facilisis. Sed ultrices metus eu blandit pulvinar</p>
                <div className="btn">
                    {
                      firebase.auth().currentUser &&
                      /* Mettre à jour l'archive sur cloud storage */
                      <a href="https://firebasestorage.googleapis.com/v0/b/cp-project-2023.appspot.com/o/cv-react-firebase-main.zip?alt=media&token=117b4af1-a62c-4d21-b21a-3c417d7b8887" target="_blank" rel="noreferrer">Mon Archive</a>
                    }
                    <a href="https://firebasestorage.googleapis.com/v0/b/cp-project-2023.appspot.com/o/CV_CPouillart.pdf?alt=media&token=ec84413d-2dc5-4d90-b64d-adff906975b5" target="_blank" rel="noreferrer">Mon CV</a>
                </div>
            </div>
            <div className="imgContent">
                <img src="./9.svg" alt=""></img>
            </div>
            <a href="#technologies" className="scrolldown"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></a>
        </section>
    );
};

export default Header;