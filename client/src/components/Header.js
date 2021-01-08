import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactLogo from '../logo.svg';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand as={Link} to="/">
          <img
            src={ReactLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Luminder"
          />
          <span>Luminder</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Link>
    </Navbar>
  );
}

export default Header;
