import "./App.css";
import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Stack from "./components/Stack/Stack";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });
    setScreenWidth(window.screen.width);
  }, [screenWidth]);
  return (
    <div style={{}}>
      <Header screenWidth={screenWidth} />
      <Intro />
      <About />
      <Stack screenWidth={screenWidth} />
      <Portfolio />
      <Contact setShowAlert={setShowAlert} />
      <div className={`alert ${showAlert ? "show" : ""}`}>
        <Alert>Email sent successfully</Alert>
      </div>
    </div>
  );
}

export default App;
