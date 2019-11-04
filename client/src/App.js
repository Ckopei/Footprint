import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import Auth from "./utils/Auth";
import API from "./utils/API";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import Title from "./components/Title/title";
import "./App.css";

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
  color: "cornflowerblue",
  listStyle: "none"
};

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
  <Router>
    <div className="main-body">
      <Nav className="App-header" />
      <Container>
        <Title />
        {/* I would like to link these in the public route, but it won't 
		let me - If I leave them here, they appear on every page. */}
        {/* <AuthButton /> */}
        {/* <ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
					<button className="btn btn-danger"
						onClick={() => {
							API.getScore();
						}}>
						Test Route!
					</button>
				</ul> */}
        <Switch>
          <Route exact path="/" component={PublicRoute} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/protected" component={ProtectedRoute} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Container>
    </div>
  </Router>
);

//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) =>
  Auth.isAuthenticated ? (
    <div className="container">
      <p>Success! You are Logged In!</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          Auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <p>You are not logged in.</p>
  )
);

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AuthExample;
