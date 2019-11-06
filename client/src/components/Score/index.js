import React from "react";
import "./style.css";

class Score extends React.Component {
    render() {
        return (
            <div>
                <h1 className="score">Your score is: {this.props.score}</h1>
            </div>
        )
    }
}

export default Score;