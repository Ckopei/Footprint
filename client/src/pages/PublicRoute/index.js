import React from "react";
import { isAbsolute } from "path";

const buttonDivStyling = {
    margin: "0 auto",
    width: "300px",
    position: "relative",
    top: "200px"
};

const buttonStyling ={
    margin: "20px",
    color: "white"
    
}

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends React.Component {
  render() {
    return (
      <div className="sign-in-buttons" style={buttonDivStyling}>
        <button className="btn btn-lg btn-warning"style={buttonStyling}>Log In</button>
        <button className="btn btn-lg btn-primary"style={buttonStyling}>Sign Up</button>
      </div>
    );
  }
}

export default PublicRoute;
