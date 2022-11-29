import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="about">
      <section className="about-section container">
        <h1 className="text-center about-section-title pt-3">About Me</h1>
        <div className="row">
          <div className="col-lg-5 my-img-container">
            <img alt="Edison" src="/img/Edison.png" className="my-img" />
          </div>
          <div className="col-lg-7 about-me-container">
            <p className="about-me-text">
              I am a full stack web2 and web3 developer with a passion for
              creating beautiful and functional websites and decentralized
              applications. I have a strong passion for learning new
              technologies and I am always looking to improve my skills.
            </p>
            <div>
              
            </div>
            <a className="cv-btn" href="/assets/Resume.pdf" target="_blank">Download Resumé</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
