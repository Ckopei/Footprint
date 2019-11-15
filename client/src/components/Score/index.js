import React from "react";
import "./style.css";
import AnimatedNumber from "react-animated-number";

class Score extends React.Component {
  render() {
    return (
      <div className="scoreContainer">
        <h5 className="userDisplay">
          Welcome, <span>{this.props.username}</span>!
        </h5>
        <h5 className="score">
          Your score is:{" "}
          <AnimatedNumber
            component="text"
            value={this.props.score}
            style={{
              marginLeft: "2%",
              transition: "0.8s ease-out",
              fontSize: 30,
              transitionProperty: "background-color, color, opacity"
            }}
            duration={300}
            stepPrecision={0}
          />
        </h5>
      </div>
    );
  }
}

export default Score;
