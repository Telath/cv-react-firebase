/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ProjetsDataService from "../services/projets.services";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [message, setMessage] = useState({ error: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      github === "" ||
      title === "" ||
      image === "" 
      ) {
      setMessage({ error: true, message: "Veuillez remplir tous les champs" });
      return;
    }
    const newProject = {
      github,
      title,
      image,
    };
    try {
      await ProjetsDataService.addProject(newProject);
      setMessage({ error: false, message: "Projet ajouté" });
    } catch (error) {
      setMessage({ error: true, message: "Une erreur est survenue" });
    }
    setGithub("");
    setTitle("");
    setImage("");
  };

  return (
    <>
      <div className="addProject">
        <form className="formProject" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom du projet"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lien Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lien de l'image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
};

export default AddProject;