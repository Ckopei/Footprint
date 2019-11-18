import React from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import Title from "../../components/Title/title";
import Article from "../../components/Article";
import LogOutNav from "../../components/LogOutNav/LogOutNav";
import "./style.css";

class News extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.pushState();
  }
 //function for grabbing all entries in our articles DB and setting the state, is called as soon as component mounts.
  pushState = () => {
    API.showArticles().then(data => {
      this.setState({ articles: data.data });
    });
  };

  render() {
    return (
      <div>
        <LogOutNav />
        <Container>
          <Title />
          <div className="articleContainer">
            <h3 className="text-center">The Latest News</h3>
            <p className="lead text-center">
              Click on the links below to read the latest in environmental news!
            </p>
            <hr></hr>
            <Row>
              {/* map over the articles state and give each one as props to articles component. Index is a included argument of map method for setting the unique key. removal throws an error. */}
              {this.state.articles.map((article, index) => {
                return (
                    <Article className="articleColumn"
                      key={index}
                      title={article.title}
                      link={article.link}
                    />
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default News;
