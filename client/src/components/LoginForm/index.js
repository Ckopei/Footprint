import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  // refs
  form: null;
  usernameElem: null;
  passwordElem: null;

  render() {
    const { onLogin } = this.props;
    return (
      <div className="card">
        <form
          ref={elem => (this.form = elem)}
          onSubmit={e => {
            e.preventDefault();
            return onLogin({
              username: this.usernameElem.value,
              password: this.passwordElem.value
            });
          }}
        >
          <div className="card-header">
            <h4>Log In</h4>
          </div>
          <div className="form-group">
            <input
              required
              className="form-control"
              ref={input => (this.usernameElem = input)}
              type="text"
              name="username"
              placeholder="Enter Username"
            />
            <br />
            <input
              required
              className="form-control"
              ref={input => (this.passwordElem = input)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <button className="btn btn-success" type="submit">
              Log In
            </button>
            <span>or</span>
            <Link to="/register">
              <button className="btn btn-danger">Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
