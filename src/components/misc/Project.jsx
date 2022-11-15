import React from "react";
import "../Portfolio/portfolio.css";

const Project = ({ name, description, liveDemo, gitRepo, img }) => {
  return (
    <div className="project-body">
      <div className="project-img-container">
        <img className="project-img" src={img} alt={name}/>
      </div>
      <div className="lower-body d-flex justify-content-around">
        <div className="project-text-container">
          <h3 className="project-name">{name}</h3>
          <h5 className="project-description">{description}</h5>
        </div>
        <div className="project-links d-flex flex-column">
          {gitRepo && (
            <a href={gitRepo} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github mb-2"></i>
            </a>
          )}
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
