//import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./index.css";
import Home from "./landed/Home";
import Project from "./landed/Project";
import About from "./landed/About";
import Contact from "./landed/Contact";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/project" element ={<Project />}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/contact" element ={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
