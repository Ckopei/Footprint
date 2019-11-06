import React from "react";
import "./style.css";

class DisplayName extends React.Component {
    render() {
        return <h3 className="userDisplay">Welcome <span>{this.props.username}</span>!</h3>   
    }
}

export default DisplayName;