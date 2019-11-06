import React from "react";
import "./style.css";

class Score extends React.Component {
    render() {
        return (
            <div>
                <h3 className="score">Your score is: {this.props.score}</h3>
            </div>
        )
    }
}

export default Score;