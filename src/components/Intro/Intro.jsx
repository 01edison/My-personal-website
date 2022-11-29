import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div id="home">
      <section className="intro-section container pt-5">
        <h1 className="intro-heading">MGBEOKWERE EDISON</h1>
        <h4 className="intro-subheading text-center">
          WEB && BLOCKCHAIN <span className="developer__text">DEVELOPER.</span>
        </h4>
        <div className="intro-btns">
          <a className="cv-btn" href="/assets/Resume.pdf" target="_blank">
            Download Resumé
          </a>
          <a className="projects-btn" href="#portfolio">
            View My Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Intro;
