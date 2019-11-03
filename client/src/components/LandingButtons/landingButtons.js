import React from "react";

// Styles for the buttons
const buttonDivStyling = {
  margin: "0 auto",
  width: "300px",
  position: "relative",
  top: "200px"
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
      <button className="btn btn-lg log-in" style={logIn}>
        Log In
      </button>
      <button className="btn btn-lg btn-primary sign-up" style={signUp}>
        Sign Up
      </button>
    </div>
  );
}

export default LandingButtons;
