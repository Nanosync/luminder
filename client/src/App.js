import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Chat from './pages/Chat';
import ReactLogo from './logo.svg';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Link to="/">
            <Navbar.Brand as={Link} to="/">
            <img
              src={ReactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
