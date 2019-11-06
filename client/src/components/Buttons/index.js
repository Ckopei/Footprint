import React from "react";
import "./style.css";
//Uses the Auth methods to actually login with the LoginForm Component.
class Buttons extends React.Component {
  myfunction() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="container buttonContainer">
        <div className="row mx-auto">
          <div className="col-6 mt-5">
            <img
              className="biggerImg"
              src="/buttons/light.svg"
              alt="bicycle"
              onClick={this.props.updateScore}
            />
            <h3>light</h3>
          </div>
          <div className="col-6 mt-5">
            <img
              className="biggerImg"
              src="/buttons/car.svg"
              alt="car"
              onClick={this.props.updateScore}
            />
            <h3>Car</h3>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-6 mt-5">
            <img
              className="biggerImg"
              src="/buttons/world.svg"
              alt="earth"
              onClick={this.props.updateScore}
            />
            <h3>world</h3>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-4 text-center mt-5">
            <img
              className="biggerImg"
              src="/buttons/water.svg"
              alt="flowers"
              onClick={this.props.updateScore}
            />
            <h3>water</h3>
          </div>
          <div className="col-4 text-center mt-5">
            <img
              className="biggerImg"
              src="/buttons/windmill.svg"
              alt="house"
              onClick={this.props.updateScore}
            />
            <h3>windmill</h3>
          </div>
          <div className="col-4 text-center mt-5">
            <img
              className="biggerImg"
              src="/buttons/light.svg"
              alt="leaf"
              onClick={this.props.updateScore}
            />
            <h3>light</h3>
            </div>
          </div>
        </div>
    );
  }
}

export default Buttons;
