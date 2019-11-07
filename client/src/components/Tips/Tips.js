import React from "react";
import { Container } from "../Grid";
import Title from "../Title/title";
import Nav from "../Nav/index";
import "./style.css";

class Tips extends React.Component {
  render() {
    return (
      <div>
        <Nav className="App-header" />
        <Container>
          <Title />
          <div className="tipsContainer">
            <button
              type="button"
              className="btn btn-primary tipButton"
              data-toggle="modal"
              data-target="#modal1"
            >
              Starter Tips
            </button>
            <button
              type="button"
              className="btn btn-primary tipButton"
              data-toggle="modal"
              data-target="#modal2"
            >
              Using Less Plastic
            </button>
            <button
              type="button"
              className="btn btn-primary tipButton"
              data-toggle="modal"
              data-target="#modal3"
            >
              Where to Recycle
            </button>
            <button
              type="button"
              className="btn btn-primary tipButton"
              data-toggle="modal"
              data-target="#modal4"
            >
              The Coffee Cup Special
            </button>
            <button
              type="button"
              className="btn btn-primary tipButton"
              data-toggle="modal"
              data-target="#modal5"
            >
              Water Bottle Roundup
            </button>
            <button
              type="button"
              className="btn btn-primary tipButton"
              data-toggle="modal"
              data-target="#modal6"
            >
              Holiday Mindfulness
            </button>
            <div
              className="modal fade"
              id="modal1"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal1Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modal1Title">
                      Starter Tips
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-responsive"
                      src="/tips/starter.png"
                      alt="Starter Tips for staying environmentally conscious"
                    ></img>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal2Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modal2Title">
                      Starter Tips
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-responsive"
                      src="/tips/lessplastic.jpg"
                      alt="Tips on using less plastic"
                    ></img>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal3"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal3Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modal3Title">
                      Where to Recycle
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-responsive"
                      src="/tips/wheretorecycle.png"
                      alt="Where to recycle which materials"
                    ></img>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal4"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal4Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modal4Title">
                      The Coffee Cup Special
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-responsive"
                      src="/tips/coffeecups.png"
                      alt="infographic about recycling coffee cups"
                    ></img>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal5"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal5Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modal5Title">
                      Water Bottle Roundup
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-responsive"
                      src="/tips/waterbottles.jpg"
                      alt="infograph about using fewer plastic water bottles"
                    ></img>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal6"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="modal6Title"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modal6Title">
                      Holiday Mindfulness
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="img-responsive"
                      src="/tips/holidayrecycling.jpg"
                      alt="guide to recycling during the holidays"
                    ></img>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Tips;
