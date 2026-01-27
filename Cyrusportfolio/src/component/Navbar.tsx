import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon-github-fill.svg';
import navIcon3 from '../assets/images/nav-icon-twitter-fill.svg';
import { HashLink } from 'react-router-hash-link';

const Appbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => setActiveLink(value);

  const navLinks = [
    { label: 'Home', href: '#home', key: 'home' },
    { label: 'Skills', href: '#skills', key: 'skills' },
    { label: 'Projects', href: '#project', key: 'projects' },
    { label: 'About Me', href: '#about', key: 'about' },
    { label: 'Blog', href: '#blog', key: 'blog' },
  ];

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : "bg-dark"} fixed="top">
      <Container fluid>
        {/* Brand Logo */}
        {/* <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* ───── Horizontal scroll Nav ───── */}
          <div className="nav-scroll-wrapper flex-grow-1">
            <Nav className="d-flex align-items-center">
              {navLinks.map(link => (
                <Nav.Link
                  key={link.key}
                  href={link.href}
                  className={activeLink === link.key ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(link.key)}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </div>

          {/* Social Icons & Connect Button */}
          <span className="navbar-text d-flex align-items-center gap-3 ms-3">
            <div className="social-icon d-flex gap-2">
              <a target="_blank" href="https://www.linkedin.com/in/emmanuel-adeyemi-464ba5227"><img src={navIcon1} alt="LinkedIn" /></a>
              <a target="_blank" href="https://github.com/cyrus-nodejs"><img src={navIcon2} alt="GitHub" /></a>
              <a target="_blank" href="https://x.com/Tech__Baron"><img src={navIcon3} alt="Twitter/X" /></a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
