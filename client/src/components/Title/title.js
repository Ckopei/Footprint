import React from "react";
import "./style.css";
import TextLoop from "react-text-loop";

function Title() {
  return (
    <div className="title">
      <h1>Footprint</h1>

      <h3 className="subtitle">
        {" "}
        Helping you help{" "}
        <TextLoop interval={3500}>
          <span> the world</span>
          <span> your community</span>
          <span> yourself</span>
        </TextLoop>
      </h3>
    </div>
  );
}

export default Title;
