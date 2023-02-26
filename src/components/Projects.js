import React from 'react';

const Projects = () => {
    return (
        <section id="mes-projets">
            <h2>Mes <span class="title">projets</span></h2>
            <ul>
                <li>
                    <div class="card">
                        <div class="cardHeader">
                            <img src="./animequotes.png" alt=""></img>
                        </div>
                        <div class="cardContent">
                            <h3 class="cardTitle">AnimeQuotes</h3>
                            <a href="https://github.com/Telath/AnimeQuotes" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <div class="cardHeader">
                            <img src="./littleword.jpg" alt=""></img>
                        </div>
                        <div class="cardContent">
                            <h3 class="cardTitle">Littleword</h3>
                            <a href="https://github.com/Telath/littleworld" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <div class="cardHeader">
                            <img src="./Ulcotheque.png" alt=""></img>
                        </div>
                        <div class="cardContent">
                            <h3 class="cardTitle">Ulco'thèque</h3>
                            <a href="https://github.com/Telath/ulcotheque" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Projects;