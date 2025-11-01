

import {  Navbar, Container, Nav } from 'react-bootstrap';
// import { useTheme } from "../context/themecontext";
import { useState, useEffect } from 'react';
// import logo from '../assets/images/cyrus-nodejs.svg'
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon-github-fill.svg';
import navIcon3 from '../assets/images/nav-icon-twitter-fill.svg';
import { HashLink } from 'react-router-hash-link';


const Appbar   = () => {
  // const { theme, toggleTheme} = useTheme();

  
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (

<Navbar expand="md" className={scrolled ? "scrolled" : "bg-dark"}>
        <Container>
          {/* <Navbar.Brand href="/">
            <img src={logo} className='text-white' alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Blog</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/emmanuel-adeyemi-464ba5227"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://github.com/cyrus-nodejs"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://x.com/Tech__Baron"><img src={navIcon3} alt="" /></a>
                
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Appbar;