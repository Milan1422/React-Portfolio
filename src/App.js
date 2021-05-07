import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import "./App.css";
import About from "./components/About/About";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import TitleMessage from "./components/TitleMessage/TitleMessage";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Wrapper className="App" style={{ position: "relative" }}>
      <Navbar />
      <Jumbotron />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Skills />
    </Wrapper>
  );
}

export default App;
