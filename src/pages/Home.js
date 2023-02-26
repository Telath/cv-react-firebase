import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

const Home = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Technologies />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;