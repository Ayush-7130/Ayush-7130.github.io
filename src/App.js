import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from './components/Banner/Banner';
import { Scroll } from './components/Scroll/Scroll';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Scroll />
      <Banner />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
