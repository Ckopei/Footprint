import React from "react";
import { isAbsolute } from "path";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends React.Component {
  render() {
    return (
      <div>
        <h1>this is a public page</h1>
      </div>
    );
  }
}

export default PublicRoute;
