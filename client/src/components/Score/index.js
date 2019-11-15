import React from "react";
import "./style.css";
import AnimatedNumber from "react-animated-number";

class Score extends React.Component {
  render() {
    return (
      <div className="scoreContainer">
        <h3 className="userDisplay">
          Welcome, <span>{this.props.username}</span>!
        </h3>
        <h3 className="score">
          Your score is:{" "}
          <AnimatedNumber
            component="text"
            value={this.props.score}
            style={{
              transition: "0.8s ease-out",
              fontSize: 48,
              transitionProperty: "background-color, color, opacity"
            }}
           
            duration={300}
            stepPrecision={0}
          />
        </h3>
      </div>
    );
  }
}

export default Score;
