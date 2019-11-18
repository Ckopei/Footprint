import React from "react";
import { Col } from "../../components/Grid";
import "./style.css";

class Article extends React.Component {
  render() {
    return (
      <Col size="lg-12">
        <div className="article">
          <a href={this.props.link}>
            <h5>{this.props.title}</h5>
          </a>
        </div>
      </Col>
    );
  }
}

export default Article;
