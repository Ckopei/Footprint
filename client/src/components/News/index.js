import React from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Title from "../../components/Title/title";
import LogOutNav from "../../components/LogOutNav/LogOutNav";

class News extends React.Component {
  
  componentDidMount() {
    this.scrape();
    this.display();
  }

  // this function does a get request to pull back the currently logged in user on this page and dump the user object into our state.
  scrape = () => {
    API.getScrape();
  };
  //put request that just adds 6 to the user score every click, then updates the user state.
  display = () => {
    API.showArticles().then(data => {
        for (var i = 0; i < data.length; i++) {
            // Display the apropos information on the page
            $("#articles").append("<p>" + data[i].title + "<br />" + data[i].link + "</p>");
          }
    });
  };

  render() {
    return (
      <div>
        <LogOutNav />
        <Container>
          <Title />
          <div className="articles"></div>
        </Container>
      </div>
    );
  }
}

export default News;
