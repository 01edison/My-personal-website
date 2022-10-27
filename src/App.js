import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Stack from "./components/Stack/Stack";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const [screenWidth, setScreenWidth] = useState(0);

  // window.addEventListener("resize", () => {
  //   setScreenWidth(window.screen.width);
  // });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });
    setScreenWidth(window.screen.width);
  }, [screenWidth]);
  return (
    <div>
      <Header screenWidth={screenWidth} setScreenWidth={setScreenWidth} />
      <Intro />
      <About />
      <Stack screenWidth={screenWidth} setScreenWidth={setScreenWidth} />
      <Portfolio />
    </div>
  );
}

export default App;
