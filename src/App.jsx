import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculaet from "./calculaet";
import Container from "./container";
import Header from "./header";
import Hero from "./hero";
import Sections from "./sections";
import Footerr from "./footer";

function App() {
  return (
    <div>
      <Container>
        <Header/>
        <Hero/>
        <Sections/>
        <Footerr/>
      </Container>
    </div>
  );
}

export default App;
