import { React, useEffect, useState } from "react";
import ProjetsDataService from "../services/projets.services";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
      getProject();
    }, []);
  
    const getProject = async () => {
      const data = await ProjetsDataService.getAllProject();
    //   console.log(data.docs);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (

        <section id="mes-projets">
            <h2>Mes <span className="title">projets</span></h2>
            <ul>

            {projects.map((doc) => (
                <li key={doc.id}>
                    <div className="card">
                        <div className="cardHeader">
                            <img src={`./${doc.image}`} alt=""></img>
                        </div>
                        <div className="cardContent">
                            <h3 className="cardTitle">{doc.title}</h3>
                            <a href={doc.github} target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </section>
    );
};

export default Projects;