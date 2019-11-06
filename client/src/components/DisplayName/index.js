import React from "react";
import "./style.css";

class DisplayName extends React.Component {
    render() {
        return (
            <div>
                <h3 className="userDisplay">Welcome {this.props.username}!</h3>
            </div>
        )
    }
}

export default DisplayName;