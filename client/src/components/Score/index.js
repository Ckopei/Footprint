import React from "react";
import "./style.css";

class Score extends React.Component {
  render() {
    return <h3 className="score">Your score is: {this.props.score}</h3>;
  }
}

export default Score;
