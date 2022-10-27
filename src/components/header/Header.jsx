import "./header.css";
import { useState, useEffect } from "react";

function Header({ screenWidth, setScreenWidth }) {
  const [yPosition, setYPosition] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  window.addEventListener("scroll", (e) => {
    setYPosition(e.path[1].scrollY);
  });

  return (
    // <nav
    //   className={`_navbar container-fluid ${yPosition > 10 ? "on-scroll" : ""}`}
    // >
    //   <div
    //     className="navbar-logo"
    //     style={{ position: "relative", top: "-.3rem" }}
    //   >
    //     <span
    //       onClick={() => window.scrollTo(0, -100000000)}
    //       className="_navbar-brand"
    //     >
    //       Edison {yPosition} {screenWidth}
    //     </span>
    //   </div>
    //   <div className="nav-list" style={{ position: "relative", top: "-.3rem" }}>
    //     <a
    //       href="#about"
    //       className={`nav-link ${
    //         yPosition > 350 && yPosition < 860 ? "active" : ""
    //       }`}
    //     >
    //       About
    //     </a>
    //     <a
    //       href="#stack"
    //       className={`nav-link ${
    //         yPosition > 860 && yPosition < 1700 ? "active" : ""
    //       }`}
    //     >
    //       Stack
    //     </a>
    //     <a
    //       href="#portfolio"
    //       className={`nav-link ${yPosition > 1700 ? "active" : ""}`}
    //     >
    //       Portfolio
    //     </a>
    //     <a href="#contact" className="nav-link">
    //       Contact
    //     </a>
    //   </div>
    // </nav>

    <div class={`topnav ${isClicked ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#stack">Stack</a>
      <a href="#portfolio">Portfolio</a>
      <a class="icon" onClick={() => setIsClicked(!isClicked)}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Header;
