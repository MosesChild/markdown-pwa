import React from "react";
import DOMPurify from "dompurify";
import { text, UserKey } from "./markupKey";
import { MarkupViewer } from "./markupViewer";
import Hideable from "./hideable";

class MarkUpEditor extends React.Component {
  // React Class Component represents entire Mark up editor and viewer.
  constructor(props) {
    super(props);
    this.state = {
      value: text,
      userclicked: "false"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (this.state.userclicked === "false") {
      this.setState({
        value: "",
        userclicked: "true"
      });
    } else {
      // should clean on input!
      this.setState({
        value: DOMPurify.sanitize(event.target.value, {
          ALLOWED_TAGS: []
        })
      });
    }
  }

  render() {
    return (
      <div className="editor">
        <textarea
          className="textInput"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="viewArea">
          <MarkupViewer value={this.state.value} />
          <button onClick={this.props.keyButton}>ShowKEY</button>
          <Hideable showKey={this.props.showKey}>
            <UserKey />
          </Hideable>
        </div>
      </div>
    );
  }
}

export default MarkUpEditor;
