import React from 'react';

const Header = () => {
    return (
        <section class="header">
            <div class="textContent">
                <h1 class="title">Clément <span class="title">POUILLART</span></h1>
                <p class="subtitle">Web développeur</p>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus id nunc gravida maximus. Morbi congue urna vitae sem blandit lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus interdum enim vitae lacus aliquet, mattis dapibus eros facilisis. Sed ultrices metus eu blandit pulvinar</p>
                <a href="https://firebasestorage.googleapis.com/v0/b/cp-project-2023.appspot.com/o/CV_CPouillart.pdf?alt=media&token=ec84413d-2dc5-4d90-b64d-adff906975b5" target="_blank" rel="noreferrer">Mon CV</a>
            </div>
            <div class="imgContent">
                <img src="./9.svg" alt=""></img>
            </div>
            <a href="#technologies" class="scrolldown"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg></a>
        </section>
    );
};

export default Header;