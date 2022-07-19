import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from '../assets/img/logo.png';

import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export const NavBar = () => {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const onUpdateActiveLink = (value: string) => {
      setActiveLink(value);
   };

   return (
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
         <Container>
            <Navbar.Brand href="/">
               <span>irradev</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link
                     href="#home"
                     className={
                        activeLink === 'home'
                           ? 'active navbar-link'
                           : 'navbar-link'
                     }
                     onClick={() => onUpdateActiveLink('home')}
                  >
                     Home
                  </Nav.Link>
                  <Nav.Link
                     href="#skills"
                     className={
                        activeLink === 'skills'
                           ? 'active navbar-link'
                           : 'navbar-link'
                     }
                     onClick={() => onUpdateActiveLink('skills')}
                  >
                     Skills
                  </Nav.Link>
                  <Nav.Link
                     href="#projects"
                     className={
                        activeLink === 'projects'
                           ? 'active navbar-link'
                           : 'navbar-link'
                     }
                     onClick={() => onUpdateActiveLink('projects')}
                  >
                     Projects
                  </Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <div className="social-icon">
                     <a href="https://github.com/irradev">
                        <BsGithub />
                     </a>
                     <a href="https://www.linkedin.com/in/irradev/">
                        <BsLinkedin />
                     </a>
                     <a href="#">
                        <BsTwitter />
                     </a>
                  </div>
                  <Nav.Link href="#connect">
                     <button className="vvd">
                        <span>Let’s Connect</span>
                     </button>
                  </Nav.Link>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};
