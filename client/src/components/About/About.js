import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import { Container, Row, Col } from "../Grid";
import Title from "../Title/title";
import LogOutNav from "../LogOutNav/LogOutNav";
import Card from "../Card";
import { Link } from "react-router-dom";
import "./style.css";

class NewAbout extends React.Component {
  render() {
    return (
      <div>
        <LogOutNav />
        <Container>
          <Title />
          <br></br>
          <Spring
            from={{ opacity: 0, marginTop: -1000 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ duration: 500 }}
          >
            {props => (
              <div style={props}>
                <div className="container about">
                  <div className="container text-center aboutApp">
                    <Row>
                      <Col size="md-12" className="text-center">
                        <h3 className="text-center">About the App</h3>
                        <br></br>
                        <p className="lead">
                          <span className="strong">Footprint</span> is an app
                          designed to make staying environmentally conscious a
                          bit more fun. You can create an account, check out our
                          tips and tricks, and start tracking what you're doing
                          to help the world you live in. <br></br>
                          <Link to="/register">Sign up </Link>to get started!
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className="creatorContainer">
                    <Row>
                      <Col size="md-12">
                        <h3 className="text-center">About the Creators</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col size="lg-6 md-12" className="text-center">
                        <Card
                          id="malCard"
                          title="Mallory Steffes"
                          position="Front End Developer"
                          avatar="https://avatars3.githubusercontent.com/u/52713263?s=460&v=4"
                          bio="I’m a full-stack developer, currently based in
                  Orlando. I de-stress by playing board games,
                  weightlifting, and indulging a bad online shopping
                  habit."
                          linkedIn="https://www.linkedin.com/in/mallorysteffes/"
                          github="https://github.com/malloryrsteffes"
                          mail="mailto:malrsteffes@gmail.com"
                        ></Card>
                      </Col>
                      <Col size="lg-6 md-12" className="text-center">
                        <Card
                          id="camCard"
                          title="Cameron Kopel"
                          position="Back End Developer"
                          avatar="https://kopel.dev/assets/img/itsAMeMario.jpg"
                          bio="I’m a full-stack developer living in Orlando. I love
                    traveling, and impulsively buy and collect guitars."
                          linkedIn="https://www.linkedin.com/in/cameronkopel/"
                          github="https://github.com/Ckopei"
                          mail="mailto:cameron@kopels.com"
                        ></Card>
                      </Col>
                    </Row>
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

export default NewAbout;
