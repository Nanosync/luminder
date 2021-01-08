import React, { Component } from "react";
import Luminder from "./luminder.png";
import "./Login.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { withFirebase } from "./Firebase";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="Container">
        <div className="Header">
          <img src={Luminder} alt="" id="header-img" />
        </div>
        <form onSubmit={this.onSubmit}>
          <h3 id="title">Login</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={this.onChange}
              value={email}
              name="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.onChange}
              value={password}
              name="password"
            />
          </div>

          <div className="buttons">
            <button type="submit" id="signin-button" disabled={isInvalid}>
              Sign In
            </button>
            <Link to="/register">
              <button id="register-button">Register</button>
            </Link>
          </div>

          <p className="forgot-password text-left">
            <a href="/">Forgot password?</a>
          </p>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;
