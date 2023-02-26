import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <section class="header">
            <div class="textContent">
                <h1 class="title">Clément <span class="title">POUILLART</span></h1>
                <p class="subtitle">Web développeur</p>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus id nunc gravida maximus. Morbi congue urna vitae sem blandit lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus interdum enim vitae lacus aliquet, mattis dapibus eros facilisis. Sed ultrices metus eu blandit pulvinar</p>
                <NavLink exact="true" to="/contact" class="contactBtn">Contact <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg></span></NavLink>
            </div>
            <div class="imgContent">
                <img src="./9.svg" alt=""></img>
            </div>
            <a href="#technologies" class="scrolldown"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></a>
        </section>
    );
};

export default Header;