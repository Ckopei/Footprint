import React from "react";
import { Link } from "react-router-dom";
// Styles for the buttons
const buttonDivStyling = {
  margin: "0 auto",
  marginTop: "300px",
  width: "300px",
  position: "relative",
};

const signUp = {
  width: "100px",
  margin: "20px",
  color: "white"
};

const logIn = {
  width: "100px",
  margin: "20px",
  color: "white",
  backgroundColor: "#418B06"
};

function LandingButtons() {
  return (
    <div className="sign-in-buttons" style={buttonDivStyling}>
      <Link to="/login">
        <button className="btn btn-lg log-in" style={logIn}>
          Log In
        </button>
      </Link>
      <Link to="/register">
        <button className="btn btn-lg btn-primary sign-up" style={signUp}>
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default LandingButtons;
