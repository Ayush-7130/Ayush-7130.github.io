import React from 'react'
import './Navbar.css'

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../../assets/img/nav-icon1.svg';

// eslint-disable-next-line
import navIcon2 from '../../assets/img/nav-icon2.svg';
// eslint-disable-next-line
import navIcon3 from '../../assets/img/nav-icon3.svg';

import navIcon4 from '../../assets/img/nav-icon4.png';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  
  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // eslint-disable-next-line
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className='Nav-Container'>
          <Navbar.Brand href="/">
            <h1 className='logo'>portfolio</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ayush--kumar--/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Ayush-7130"><img src={navIcon4} alt="" /></a>
              </div>
              <HashLink to='#contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
