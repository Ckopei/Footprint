import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



function LandingButtons() {
  return (
    <div className="signInButtons">
      <Link to="/login">
        <button className="btn btn-lg logIn">
          Log In
        </button>
      </Link>
      <Link to="/register">
        <button className="btn btn-lg btn-primary signUp">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default LandingButtons;
