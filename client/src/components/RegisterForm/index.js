import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class RegisterForm extends React.Component {
  // refs
  form: null;
  usernameElem: null;
  passwordElem: null;

  render() {
    const { onRegister } = this.props;
    console.log(`Register form props are: ${JSON.stringify(this.props)}`);

    return (
      <div className="card">
        <form
          ref={elem => (this.form = elem)}
          onSubmit={e => {
            e.preventDefault();
            return onRegister({
              username: this.usernameElem.value,
              password: this.passwordElem.value
            });
          }}
        >
          <div className="card-header">
            <h4>Sign Up</h4>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              ref={input => (this.usernameElem = input)}
              type="text"
              name="username"
              placeholder="Enter Username"
            />
            <br />
            <input
              className="form-control"
              ref={input => (this.passwordElem = input)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <button className="btn btn btn-danger" type="submit">
              Sign Up
            </button>
			<span>or</span>
            <Link to="/login"><button className="btn btn-success">Log In</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
