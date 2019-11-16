import React from "react";
import "./style.css";

class Article extends React.Component {

  render() {
    return (
        <a href={this.props.link}><p>{this.props.title}</p></a>
    )
  }
}

export default Article;
