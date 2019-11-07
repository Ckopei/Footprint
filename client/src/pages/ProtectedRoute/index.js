import React from "react";
import { username } from "../../components/Login";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import Title from "../../components/Title/title";
import Buttons from "../../components/Buttons";
import Score from "../../components/Score";
import LogOutNav from "../../components/LogOutNav/LogOutNav";

class ProtectedRoute extends React.Component {
  //state for user
  state = {
    user: []
  };
  //i can now access user data by using this.state.user

  // component mount, any time the page is loaded.
  componentDidMount() {
    console.log(`look ${username}`);
    this.firstThing();
  }

  // this function does a get request to pull back the currently logged in user on this page and dump the user object into our state.
  firstThing = () => {
    API.getUser(username).then(res => {
      // console.log(res.data);
	  this.setState({ user: res.data });
	  console.log(username);
      // console.log(this.state.user)
    });
  };
  //put request that just adds 6 to the user score every click, then updates the user state.
  updateScore = () => {
    console.log(this.state);
    API.updateScore(this.state.user).then(res => {
      console.log(res);
      this.firstThing();
    });
  };

  render() {
    return (
      <div>
        <LogOutNav />
        <Container>
          <Title />
          <div className="userContainer">
            <Score
              username={this.state.user.username}
              score={this.state.user.score}
            />
            <Buttons updateScore={this.updateScore} />
          </div>
        </Container>
      </div>
    );
  }
}

export default ProtectedRoute;
