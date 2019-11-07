import React from "react";
import { username } from "../../components/Login";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import LogOutNav from "../../components/LogOutNav/LogOutNav";
import Title from "../../components/Title/title";

class Welcome extends React.Component {
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

  render() {
    return (
      <div>
        <LogOutNav />
        <Container>
          <Title />
          <h1>Welcome, {username}</h1>
        </Container>
      </div>
    );
  }
}

export default Welcome;
