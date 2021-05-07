import React from 'react';
import './App.css';
import About from './components/About/About';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from "./components/Navbar/Navbar"
import Skills from './components/Skills/Skills';
import TitleMessage from "./components/TitleMessage/TitleMessage"
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return (
    <Wrapper> 
      <Navbar/>
      <Jumbotron/>
      <TitleMessage/>
      <About/>
      <Skills/>
    </Wrapper>
  );
}

export default App;
