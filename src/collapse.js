import React from "react";
import Collapsible from "react-collapsible";
import "./collapse.css";

function Collapse(props) {
  // React Element to present (Collapsible) helpful MarkupKeyText.
  return <Collapsible trigger={props.trigger}>{props.children}</Collapsible>;
}
export { Collapse };
