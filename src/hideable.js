import React from "react";
import "./hidden.css"

var Hideable = props => {
  const showStyle = {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    padding: "20px",

  };

  return (
    <div className={props.showKey ? 'hidden' : ''} style={showStyle}>  
      {props.children}
    </div>
  );
};
/*
class Hideable extends React.Component {
  render() {
    if (this.props.showKey==="false"){
      return <div className="hideable_hidden" />;
    } else {
      return <div className={this.props.showKey}>{this.props.children}</div>;
    }
  }
  
};
*/
export default Hideable;
