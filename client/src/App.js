import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from "./utils/Auth";
import { Login, username } from "./components/Login";
import Register from "./components/Register";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import Tips from "./components/Tips/Tips";
import About from "./components/About/About";
import "./App.css";

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
  <Router>
    <div className="main-body">

      <Switch>
        <Route exact path="/" component={PublicRoute} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/about" component={About}/>
        <PrivateRoute exact path="/protected" component={ProtectedRoute} />
        {/* ILL FIX THIS. <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

//Authbutton component / withRouter is imported from react-router
// const AuthButton = withRouter(({ history }) =>
//   Auth.isAuthenticated ? (
//     <div className="container">
//       <p>Success! You are Logged In!</p>
//       <button
//         className="btn btn-danger"
//         onClick={() => {
//           Auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//       <span className="spanAuth">Hello {username}</span>
//     </div>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// );


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
