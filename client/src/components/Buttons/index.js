import React from 'react';
import "./style.css";
//Uses the Auth methods to actually login with the LoginForm Component.
class Buttons extends React.Component {

    myfunction() {
        console.log("clicked")
    }

    render() {
        return (
            <div>
            <div className="row mx-auto">
                <div className="col-4 text-center mt-5">
                    <img className="biggerImg" src="/button/bicycle.png" alt="my image" onClick={this.myfunction} />
                    <h3>Bicycle</h3>
                </div>
                <div className="col-4 text-center mt-5">
                    <img className="biggerImg" src="/button/carpool.png" alt="my image" onClick={this.myfunction} />
                    <h3>Car</h3>
                </div>
                <div className="col-4 text-center mt-5">
                    <img className="biggerImg" src="/button/earth.png" alt="my image" onClick={this.myfunction} />
                    <h3>Earth</h3>
                </div>
            </div>

            <div className="row mx-auto">
                <div className="col-4 text-center mt-5">
                    <img className="biggerImg" src="/button/flowers.png" alt="my image" onClick={this.myfunction} />
                    <h3>Flowers</h3>
                </div>
                <div className="col-4 text-center mt-5">
                    <img className="biggerImg" src="/button/house.png" alt="my image" onClick={this.myfunction} />
                    <h3>House</h3>
                </div>
                <div className="col-4 text-center mt-5">
                    <img className="biggerImg" src="/button/leaf.png" alt="my image" onClick={this.myfunction} />
                    <h3>Leaf</h3>
                </div>
            </div>

            </div>

        )
    }
}

export default Buttons;