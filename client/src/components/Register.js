import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../logo.png';
import './Login.css';
import { withFirebase } from './Firebase';

const SignUpPage = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, passwordOne } = this.state;
    console.log(email);
    console.log(passwordOne);

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
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
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.trim() === "" ||
      email.trim() === "";

    return (
      <div className="login-container">
        <div className="login-header">
          <img src={Logo} alt="" id="header-img" />
        </div>
        <form onSubmit={this.onSubmit}>
          <h3 id="title">Register</h3>

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
              value={passwordOne}
              name="passwordOne"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password again"
              onChange={this.onChange}
              value={passwordTwo}
              name="passwordTwo"
            />
          </div>

          <div className="buttons">
            <button disabled={isInvalid} type="submit" id="submit-button">
              Register
            </button>
          </div>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
