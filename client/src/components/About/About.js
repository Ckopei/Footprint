import React from "react";
import { Spring } from "react-spring/renderprops";

import { Container } from "../Grid";
import Title from "../Title/title";
import LogOutNav from "../LogOutNav/LogOutNav";
import "./style.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <LogOutNav />
        <Container fluid>
          <div className="container">
            <Title />
          </div>
          <Spring
            from={{ opacity: 0, marginLeft: -1000 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ duration: 800, mass: 1000, clamp: false }}
          >
            {props => (
              <div style={props}>
                <div className="aboutContainer">
                  <div className="container text-center aboutApp">
                    <h3 className="jumbotron-heading">About the App</h3>
                    <p className="lead">
                      <span className="strong">Footprint</span> is an app
                      designed to make staying environmentally conscious a bit
                      more fun. You can create an account, check out our tips
                      and tricks, and start tracking what you're doing to help
                      the world you live in. <br></br>
                      <Link to="/register">Sign up </Link>to get started!
                    </p>
                  </div>
                  <div className="container text-center creatorContainer">
                    <div className="row">
                      <div className="col-lg-12 mb-lg-0 mb-5 text-center">
                        <h2 className="jumbotron-heading">Behind the App</h2>
                      </div>
                      <div className="col-lg-4 offset-1 col-sm-12 avatar">
                        <img
                          src="https://avatars3.githubusercontent.com/u/52713263?s=460&v=4"
                          className="rounded-circle z-depth-1"
                          alt="Mallory_Steffes"
                        />

                        <h5 className="aboutName">Mallory Steffes</h5>
                        <p className="aboutPosition">
                          <strong>Front-End Developer</strong>
                        </p>
                        <p className="aboutText">
                          I’m a full-stack developer, currently based in
                          Orlando. I de-stress by playing board games,
                          weightlifting, and indulging a bad online shopping
                          habit.
                        </p>
                      </div>
                      <div className="col-lg-4 offset-2 col-sm-12 avatar text-center">
                        <img
                          src="https://kopel.dev/assets/img/itsAMeMario.jpg"
                          className="rounded-circle z-depth-1"
                          alt="Cameron_Kopel"
                        />

                        <h5 className="aboutName">Cameron Kopel</h5>
                        <p className="aboutPosition">
                          <strong>Back-End Developer</strong>
                        </p>
                        <p className="aboutText">
                          I’m a full-stack developer living in Orlando. I love
                          traveling, and impulsively buy and collect guitars.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Spring>
        </Container>
      </div>
    );
  }
}

export default About;
