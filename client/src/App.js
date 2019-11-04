import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import API from "./utils/API";
import Nav from "./components/Nav";
import {Login, username} from "./components/Login";
import Register from "./components/Register";
import Buttons from "./components/Buttons";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
import Title from "./components/Title/title";
import './App.css';

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
	color: 'cornflowerblue',
	listStyle: 'none'
};
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<Router>
		<div className="main-body">
			<Nav className="App-header" />
			<Container>
				<Title />
				
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
					<Route path="/public" component={PublicRoute} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/buttons" component={Buttons} />
					<PrivateRoute path="/protected" component={ProtectedRoute} />
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>
)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<p>Success! You are Logged In!</p>
			<button className="btn btn-danger"
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
			<span className="spanAuth">Hello {username}</span>
		</div>
	) : (
			<p>You are not logged in.</p>
		)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
			)
	)} />
)








export default AuthExample; 


