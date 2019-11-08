# Footprint
Footprint is a full-stack MVC app, built with React.js and backed by an mLab Mongo database. starter with basic components routes and authentication. The project is in MVC format that includes the User model and controller. Some routes in the client are protected by the passport authentication using the local strategy. 

## Purpose and Inspiration
Footprint was created to help gameify staying environmentally active. By clicking buttons signifying different actions, they can track what they've done each day to contribute to decreasing their overall carbon footprint. T


## Live Project

The app can be found [here](https://fathomless-headland-64750.herokuapp.com/).


# About the App

![Screen Shot 2019-11-07 at 6 04 58 PM](https://user-images.githubusercontent.com/52713263/68435362-23bda580-0189-11ea-91da-66d4bd257cdc.png)

## MVC
This project is structured in the MVC paradigm. We use React for the views and front end routing, node.js for the backend API routes, and Mongoose as the ORM for our MongoDB. The app can: 

- Register a new user
- Login with an existing user
- Track the user's score 
- Log Out

## Tech Stack
+ [MongoDB](https://www.mongodb.com/)
    - Document based database for storing user data.
+ [MONGOOSE ORM](https://www.npmjs.com/package/mongoose)
    - Handles object relational mapping for our MongoDB.
+ [EXPRESS](https://www.npmjs.com/package/express)
    - Back end API route handling
+ [REACT](https://reactjs.org/)
    - Dynamic views
+ [REACT ROUTER](https://reacttraining.com/react-router/)
    - Handling all view routes
+ [Axios](https://www.npmjs.com/package/axios)
    - Handling client side HTTP requests
+ [NODE](https://nodejs.org/en/)
    - Runtime environment for running JavaScript outside of the browser
+ [PASSPORT](http://www.passportjs.org/docs/username-password/)
    - User authentication
+ [BOOTSTRAP](https://getbootstrap.com/)
    - Predefined CSS3 library
    

#### Install and run locally
Install all the dependencies with Yarn or NPM <br>
`npm install` <br>
Make sure you start Mongod and have mongoDB running..<br>
`mongod <filepath to database>` <br>
`mongo` <br>
Then start the project <br>
`npm start`


## The App in Action

Once they've signed up, users can log in to view their home page. This is the main landing page for the app, and contains Footprint's set of buttons that allow the user to keep track of the eco-friendly "score".

![Footprint (1)](https://user-images.githubusercontent.com/52713263/68436855-3df98280-018d-11ea-9599-bb369468f010.gif)

Logged in users can also access a great beginner's set of tips and tricks on easy ways to start lightening their footprint.

![Footprint](https://user-images.githubusercontent.com/52713263/68436831-26ba9500-018d-11ea-9b9f-5597b81bdd2b.gif)


## How the App tracks and uses the User document

The login component has an variable for username set to an empty string. Once a user signs up and successfully registers an account, the login component reassigns that variable to the users input. This username variable is then exported from that component, and imported into our protected route.

The Protectedroute component is a stateful component, and on componentDidMount() calls a reusable function (getUserObj)  for grabbing user data and putting the entire user object into the state.
![getUserObj](https://user-images.githubusercontent.com/52455151/68442358-bae12800-019e-11ea-80dd-189b4e860652.png)

GetUserObj uses Axios to send a GET request to our express routes, and passes in the username as part of the req.body.
![02UserData](https://user-images.githubusercontent.com/52455151/68442411-e7953f80-019e-11ea-9724-fdb17803fbf5.png)

On the backend, the express route then takes this req.body of the username and passes it along to a mongoose findOne function, which returns a user object.
![03userData](https://user-images.githubusercontent.com/52455151/68442434-f7148880-019e-11ea-8153-3e9458c57ee5.png)

Once the user object is back at the client side getUserObj function, it is used to set the state of our user. This allows us to track the entire user document in a state, which we then use in a similar fashion to update the user's score on button clicks.
![04setstate](https://user-images.githubusercontent.com/52455151/68442504-2f1bcb80-019f-11ea-88e0-788873564ea4.png)






