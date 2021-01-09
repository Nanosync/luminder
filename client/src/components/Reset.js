import React, { Component } from "react";
import Logo from "../logo.png";
import "./Login.css";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  success: false,
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.setState({success: true});
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, success, error } = this.state;
 
    const isInvalid = email === '';

    return (
      <div className="login-container">
        <div className="login-header">
          <img src={Logo} alt="" id="header-img" />
        </div>
        <form onSubmit={this.onSubmit}>
          <h3 id="title">Reset Password</h3>

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

          <div className="buttons">
            <button type="submit" id="signin-button" disabled={isInvalid}>
              Reset Password
            </button>
          </div>

          {error && <p>{error.message}</p>}
          {success && <p>Please check your email to reset your password.</p>}
        </form>
      </div>
    );
  }
}

export default PasswordForgetPage;

const PasswordForgetForm = withRouter(withFirebase(PasswordForgetFormBase));
