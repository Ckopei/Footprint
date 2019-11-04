import React from "react";
import { isAbsolute } from "path";
import LandingButtons from "../../components/LandingButtons/landingButtons";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends React.Component {
  render() {
    return (
      <div>
        <LandingButtons />
      </div>
    );
  }
}

export default PublicRoute;
