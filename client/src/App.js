import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Reset from './pages/Reset';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/reset" exact component={Reset} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
