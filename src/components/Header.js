import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components for Header
const Nav = styled.nav`
  background-color: white;
  padding: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  font-size: 18px;
  position: relative;
`;

const Logo = styled.h1`
  color: black;
  font-size: 24px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const NavLinks = styled.div`
  display: flex;

  a {
    color: black;
    margin-left: 25px;
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }

  @media (max-width: 430px) {
    position: absolute;
    top: 60px;
    transform: ${({ open }) => (open ? 'translateX(-105%)' : 'translateX(150%)')};
    width: 40%; /* Adjust as needed */
    height: 90vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease-in-out;
    z-index: 10;

    a {
      margin: 15px 0;
    }
  }
`;

// Hamburger Menu for Mobile
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: black;
    margin: 3px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <Logo>My Portfolio</Logo>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinks open={open}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/resume" onClick={toggleMenu}>Resume</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Header;
