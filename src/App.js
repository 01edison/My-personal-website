import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Stack from "./components/Stack/Stack";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });
    setScreenWidth(window.screen.width);
  }, [screenWidth]);
  return (
    <div>
      <Header screenWidth={screenWidth} />
      <Intro />
      <About />
      <Stack screenWidth={screenWidth} />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
