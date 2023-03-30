import React from 'react';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <section id="notfound">
                <h1>ERREUR <span className="title">404</span></h1>
            </section>
        </div>
    );
};

export default NotFound;