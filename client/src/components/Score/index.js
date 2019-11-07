import React from "react";
import "./style.css";

class Score extends React.Component {
  render() {
    return (
      <div className="scoreContainer">
        <h3 className="userDisplay">
          Welcome, <span>{this.props.username}</span>!
        </h3>
        <h3 className="score">Your score is: <span>{this.props.score}</span></h3>
      </div>
    );
  }
}

export default Score;
