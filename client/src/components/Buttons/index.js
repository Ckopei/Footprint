import React from "react";
import "./style.css";
//Uses the Auth methods to actually login with the LoginForm Component.
class Buttons extends React.Component {
  

  render() {
    return (
      <div className="container buttonContainer">
        <div className="row mx-auto">
          <div className="col-lg-6 col-sm-12 mt-5 buttonColumn">
            <img
              className="biggerImg"
              src="/buttons/light.svg"
              alt="bicycle"
              onClick={this.props.updateScore}
            />
            <span>Turned off the lights</span>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 buttonColumn">
            <img
              className="biggerImg"
              src="/buttons/spinach.svg"
              alt="car"
              onClick={this.props.updateScore}
            />
            <span>Skipped red meat</span>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-lg-6 col-sm-12 mt-5 buttonColumn">
            <img
              className="biggerImg"
              src="/buttons/world.svg"
              alt="earth"
              onClick={this.props.updateScore}
            />
            <span>Recycled</span>
          </div>

          <div className="col-lg-6 col-sm-12 mt-5 buttonColumn">
            <img
              className="biggerImg"
              src="/buttons/windmill.svg"
              alt="flowers"
              onClick={this.props.updateScore}
            />
            <span>Used renewed/recycled energy</span>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-lg-6 col-sm-12 mt-5 buttonColumn">
            <img
              className="biggerImg"
              src="/buttons/water.svg"
              alt="hous"
              onClick={this.props.updateScore}
            />
            <span>Skipped a shower</span>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 buttonColumn">
            <img
              className="biggerImg"
              src="/buttons/car.svg"
              alt="plant"
              onClick={this.props.updateScore}
            />
            <span>Took public transportation</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
