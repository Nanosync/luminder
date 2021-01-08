import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Reset from "./pages/Reset";
import Edit from "./pages/EditProfile";
import Logout from "./pages/Logout";
import { withAuthentication } from "./components/Session/";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/reset" exact component={Reset} />
            <Route path="/edit" exact component={Edit} />
            <Route path="/logout" exact component={Logout} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};

export default withAuthentication(App);
