import React, { useState, useEffect } from "react";
import { projects } from "./projects";
import Project from "../misc/Project";
import "./portfolio.css";

const Portfolio = () => {
  const [allActive, setAllActive] = useState(true);
  const [web2Active, setWeb2Active] = useState(false);
  const [web3Active, setWeb3Active] = useState(false);
  const [activeProjects, setActiveProjects] = useState([]);

  const getProjects = async (projects) => {
    if (allActive) {
      setActiveProjects(projects);
    } else if (web2Active) {
      const web2Projects = projects.filter(
        (project) => project.category === "web2"
      );
      setActiveProjects(web2Projects);
    } else if (web3Active) {
      const web3Projects = projects.filter(
        (project) => project.category === "web3"
      );
      setActiveProjects(web3Projects);
    }
  };

  useEffect(() => {
    getProjects(projects);
  }, [allActive, web2Active, web3Active]);
  return (
    <section className="work section" id="portfolio">
      <h1 className="text-center portfolio-title pt-3">My Portfolio</h1>
      <p className="portfolio-subheading text-center">
        Some of my recent projects
      </p>

      <div className="filter-btns text-center pt-3 mb-5">
        <button
          className={`filter-btn all-btn ${
            allActive ? "active-filter-btn" : ""
          }`}
          onClick={() => {
            setAllActive(true);
            setWeb2Active(false);
            setWeb3Active(false);
            getProjects(projects);
          }}
        >
          All
        </button>
        <button
          className={`filter-btn web2-btn ${
            web2Active ? "active-filter-btn" : ""
          }`}
          onClick={() => {
            setAllActive(false);
            setWeb2Active(true);
            setWeb3Active(false);
            getProjects(projects);
          }}
        >
          WEB 2
        </button>
        <button
          className={`filter-btn web3-btn ${
            web3Active ? "active-filter-btn" : ""
          }`}
          onClick={() => {
            setAllActive(false);
            setWeb2Active(false);
            setWeb3Active(true);
            getProjects(projects);
          }}
        >
          WEB 3
        </button>
      </div>
      <div className="projects-container container">
        {activeProjects.map((project, i) => {
          return (
            <Project
              key={i}
              name={project.name}
              description={project.description}
              img={project.img}
              liveDemo={project.liveDemo}
              gitRepo={project.gitRepo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
