import React from "react";
import Button from "@material-ui/core/Button";
import "./appBar.css";

function ButtonAppBar(props) {
  return (
    <header>
      <h1 className="title">Markdown Editor</h1>
      <Button color="inherit" onClick={props.keyButton}>
        Show/Hide key
      </Button>
    </header>
  );
}

export default ButtonAppBar;
