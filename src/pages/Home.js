import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Notification from '../components/Notification';
import "firebase/compat/auth";

const Home = () => {

    return (
        <>
            <Navigation />
            <Notification />
            <Header />
            <Technologies />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;