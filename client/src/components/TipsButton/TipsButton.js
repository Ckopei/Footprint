import React from "react";
import { Link } from "react-router-dom";

class TipsButton extends React.Component {
  render() {
    return (
      <p className="nav-item">
        <Link
          // onClick={this.toggleNav}
          // className={
          //   window.location.pathname === "/" ? "nav-link active" : "nav-link"
          // }
          to="/tips"
        >
          Tips
        </Link>
      </p>
    );
  }
}

export default TipsButton;
