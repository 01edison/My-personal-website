import "./header.css";
import { useState } from "react";

function Header({ screenWidth }) {
  const [yPosition, setYPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  window.addEventListener("scroll", (e) => {
    setYPosition(e.path[1].scrollY);
  });

  return (
    <div
      className={`topnav ${isClicked ? "responsive" : ""} `}
      style={{ backgroundColor: "#594545" }}
      id="myTopnav"
    >
      <a href="#home">Edison</a>

      <a
        href="#about"
        className={`${yPosition > 350 && yPosition < 860 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        About
      </a>
      <a
        href="#stack"
        className={`${yPosition > 860 && yPosition < 1700 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        Stack
      </a>
      <a
        href="#portfolio"
        className={`${yPosition > 1700 && yPosition < 2500 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        className={`${yPosition > 2500 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        Contact
      </a>

      <a className="icon" onClick={() => setIsClicked(!isClicked)}>
        <i className={isClicked ? "fa-solid fa-xmark" : "fa fa-bars"}></i>
      </a>
      {screenWidth > 425 ? (
        <>
          <a
            className="contact-icon"
            href="https://www.linkedin.com/in/chimdindu-mgbeokwere-091694222/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="contact-icon"
            href="https://www.instagram.com/edison.jsx"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="contact-icon"
            href="https://github.com/01edison"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
