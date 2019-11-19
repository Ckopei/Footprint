import React from "react";
import { Col } from "../../components/Grid";
import { Spring } from "react-spring/renderprops";

import "./style.css";

class Article extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ duration: 1000, delay: 1000 }}
      >
        {props => (
          <div style={props}>
            <Col size="lg-12">
              <div className="articleLink">
                <a href={this.props.link}>
                  <h5 className="articleTitle">{this.props.title}</h5>
                </a>
              </div>
            </Col>
          </div>
        )}
      </Spring>
    );
  }
}

export default Article;
