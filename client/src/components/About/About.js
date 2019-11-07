import React from "react";
import { Container } from "../Grid";
import Title from "../Title/title";
import Nav from "../Nav/index";
import "./style.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Title />
          <br></br>
          <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-lg-12 col-sm-12 mb-lg-0 mb-5 avatar text-center">
                <h3>About Us</h3>
            </div>
          <div className="col-lg-6 col-sm-3 mb-5 avatar text-center">
            
                <img
                  src="https://avatars3.githubusercontent.com/u/52713263?s=460&v=4"
                  class="rounded-circle z-depth-1"
                  alt="Mallory_Steffes"
                />
              

              <h5 className="font-weight-bold mb-3 titleBio">Mallory Steffes</h5>
              <p className="text-uppercase blue-text">
                <strong>Front-End Developer</strong>
              </p>
              <p className="white-text">
                I’m a full-stack developer, currently based in Orlando. I
                de-stress by playing board games, weightlifting, and indulging a
                bad online shopping habit.
              </p>
              <ul className="list-unstyled mb-0">
                <a
                  className="p-2 fa-lg fb-ic"
                  href="https://www.linkedin.com/in/mallorysteffes/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin white-text"> </i>
                </a>

                <a
                  className="p-2 fa-lg ins-ic"
                  href="https://github.com/malloryrsteffes"
                  target="_blank"
                >
                  <i className="fab fa-github white-text"> </i>
                </a>

                <a
                  className="p-2 fa-lg ins-ic"
                  href="mailto:malrsteffes@gmail.com?subject=I%20want%20to%20Invest%20in%20%22Name-it!%22&body=Hi%20Mallory%2C%0A%0AI%20am%20very%20interested%20investing%20in%20%22Name-it!%22.%20Please%20contact%20me%20at%3A%0A"
                >
                  <i className="far fa-envelope"> </i>
                </a>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-3 mb-lg-0 mb-5 avatar text-center">
              <span className="bounce_Img">
                <img
                  src="https://avatars3.githubusercontent.com/u/52713263?s=460&v=4"
                  height="250px"
                  width="250px"
                  className="rounded-circle z-depth-1"
                  alt="Mallory_Steffes"
                />
              </span>

              <h5 className="font-weight-bold mb-3 titleBio">Mallory Steffes</h5>
              <p className="text-uppercase blue-text">
                <strong>Front-End Developer</strong>
              </p>
              <p className="white-text">
                I’m a full-stack developer, currently based in Orlando. I
                de-stress by playing board games, weightlifting, and indulging a
                bad online shopping habit.
              </p>
              <ul className="list-unstyled mb-0">
                <a
                  className="p-2 fa-lg fb-ic"
                  href="https://www.linkedin.com/in/mallorysteffes/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin white-text"> </i>
                </a>

                <a
                  className="p-2 fa-lg ins-ic"
                  href="https://github.com/malloryrsteffes"
                  target="_blank"
                >
                  <i className="fab fa-github white-text"> </i>
                </a>

                <a
                  className="p-2 fa-lg ins-ic"
                  href="mailto:malrsteffes@gmail.com?subject=I%20want%20to%20Invest%20in%20%22Name-it!%22&body=Hi%20Mallory%2C%0A%0AI%20am%20very%20interested%20investing%20in%20%22Name-it!%22.%20Please%20contact%20me%20at%3A%0A"
                >
                  <i className="far fa-envelope"> </i>
                </a>
              </ul>
            </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
