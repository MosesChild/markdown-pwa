import React from "react";
import "./hidden.css";

var Hideable = props => {
  return (
    <div
      className={
        "hideable " + (props.showKey ? "" : "hidden")
      } /*style={showStyle}*/
    >
      {props.children}
    </div>
  );
};

export default Hideable;
