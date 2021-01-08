import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import SignOutButton from './SignOut/SignOutButton';
import './Header.css';
import { AuthUserContext } from "./Session";

function Header() {
  const user = useContext(AuthUserContext);

  return user ? (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={Logo}
          width="226"
          height="65"
          className="d-inline-block mx-2"
          alt="LuminDER"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={user ? "mr-auto" : "mr-auto-hidden"}>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/chat">
            Chat
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav-right">
        <Nav className={user ? "ml-auto" : "ml-auto-hidden"}>
          <SignOutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    ) : "";
}

export default Header;
