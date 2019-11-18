import React from "react";
import Nav from "../../components/Nav/index";
import { Container } from "../../components/Grid";
import Title from "../../components/Title/title";
import LandingButtons from "../../components/LandingButtons/landingButtons";
import API from "../../utils/API";
/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends React.Component {
  componentDidMount(){
    this.scrape();
  };

  scrape = () => {
    API.getScrape();
  };

  render() {
    return (
      <div>
        <Nav className="App-header" />
        <Container>
          <Title />
          <LandingButtons />
        </Container>
      </div>
    );
  }
}

export default PublicRoute;
