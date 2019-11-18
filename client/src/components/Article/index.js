import React from "react";
import { Row, Col } from "../../components/Grid";
import "./style.css";

class Article extends React.Component {
  render() {
    return (
      <Col size="lg-12">
        <Row>
          <div className="articleLink">
          <a href={this.props.link}>
            <Col size="lg-4">
              <img
                alt="Article pic goes here"
                src="https://picsum.photos/seed/picsum/200/200"
                className="articlePicture"
              ></img>
            </Col>
            <Col size="lg-8">
              <h5 className="articleTitle">{this.props.title}</h5>
            </Col>
          </a>
          </div>
        </Row>
      </Col>
    );
  }
}

export default Article;
