import React from 'react'
import { username } from "../../components/Login";
import API from '../../utils/API';




/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
	//state for user
	state = {
		user:[]
	}

	// component mount
	componentDidMount(){
		console.log(`look ${username}`)
		API.getUser(username)
		.then(res => {
			console.log(res.data);
			
			this.setState({user: res.data})
			console.log(this.state.user)
		})
	}

	//api.getUSer(username)
	// .then(res) Data.username


	//getUSerInfo is a method
	//API.getUSer





	render() {
		return (
			<h3>This is a Protected Route, You must log in to see this page.</h3>
		)
	}
}

export default ProtectedRoute