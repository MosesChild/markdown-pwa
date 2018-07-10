import React from "react";
import FileInput from "react-simple-file-input";
import { openFile } from "./redux/reducers";
import { connect } from "react-redux";

const mapDispatchToProps = {
  openFile
};
function FileInputComponent(props) {
  return (
    <label>
      <FileInput
        readAs="text"
        onLoad={(event, file) => {
          props.openFile(file.name, event.target.result);
        }}
      />
      <span>LOAD</span>
    </label>
  );
}
export default connect(
  null,
  mapDispatchToProps
)(FileInputComponent);
