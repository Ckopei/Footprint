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
              src="/button/bicycle.png"
              alt="bicycle"
              onClick={this.props.updateScore}
            />
            <span>Bicycle</span>
          </div>
          <div className="col-6 mt-5">
            <img
              className="biggerImg"
              src="/button/carpool.png"
              alt="car"
              onClick={this.props.updateScore}
            />
            <span>Car</span>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-6 mt-5">
            <img
              className="biggerImg"
              src="/button/earth.png"
              alt="earth"
              onClick={this.props.updateScore}
            />
            <span>Earth</span>
          </div>
          <div className="col-6 mt-5">
          <img
            className="biggerImg"
            src="/button/flowers.png"
            alt="flowers"
            onClick={this.props.updateScore}
          />
          <span>Flowers</span>
        </div>
        </div>
        <div className="row mx-auto">
            <div className="col-6 mt-5">
              <img
                className="biggerImg"
                src="/button/house.png"
                alt="house"
                onClick={this.props.updateScore}
              />
              <span>House</span>
            </div>
            <div className="col-6 mt-5">
              <img
                className="biggerImg"
                src="/button/leaf.png"
                alt="leaf"
                onClick={this.props.updateScore}
              />
              <span>Leaf</span>
            </div>
          </div>
        </div>
    );
  }
}

export default Buttons;
