import React from 'react';
import './App.css';
import About from './components/About/About';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return (
    <Wrapper> 
      <Navbar/>
      <Jumbotron/>
      <About/>
    </Wrapper>
  );
}

export default App;
