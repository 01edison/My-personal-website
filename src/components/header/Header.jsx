import "./header.css";
import { useState } from "react";

function Header({ screenWidth}) {
  const [yPosition, setYPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  window.addEventListener("scroll", (e) => {
    setYPosition(e.path[1].scrollY);
  });

  return (
    <div
      class={`topnav ${isClicked ? "responsive" : ""} ${
        yPosition > 10 ? "onscroll" : ""
      }`}
      id="myTopnav"
    >
      <a href="#home">Edison</a>

      <a
        href="#about"
        class={`${yPosition > 350 && yPosition < 860 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        About
      </a>
      <a
        href="#stack"
        class={`${yPosition > 860 && yPosition < 1700 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        Stack
      </a>
      <a
        href="#portfolio"
        class={`${yPosition > 1700 && yPosition < 2500 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        class={`${yPosition > 2500 ? "active" : ""}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        Contact
      </a>

      <a class="icon" onClick={() => setIsClicked(!isClicked)}>
        <i class="fa fa-bars"></i>
      </a>
      {screenWidth > 425 ? (
        <>
          <a
            className="contact-icon"
            href="https://www.linkedin.com/in/chimdindu-mgbeokwere-091694222/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="contact-icon"
            href="https://www.instagram.com/edison.jsx"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            className="contact-icon"
            href="https://github.com/01edison"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
