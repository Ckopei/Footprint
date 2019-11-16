import React from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Title from "../../components/Title/title";
import Article from "../../components/Article"
import LogOutNav from "../../components/LogOutNav/LogOutNav";

class News extends React.Component {

    state = {
        articles: []
    }
  
  componentDidMount() {
    this.scrape();
    this.display();
  }

  scrape = () => {
    API.getScrape();
  };
 
  display = () => {
    API.showArticles().then(data => {
        console.log(data.data)
        this.setState({articles: data.data})
    });
  };

  render() {
    return (
      <div>
        <LogOutNav />
        <Container>
          <Title />
          <div>
              {this.state.articles.map(article => {
                  return (
                      <Article key={article.key} title={article.title} link={article.link}/>
                  )
              })}
          </div>
        </Container>
      </div>
    );
  }
}

export default News;
