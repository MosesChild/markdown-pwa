import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "./saveModal.css"; 

import { connect } from "react-redux";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});
const mapStateToProps = state => {
  return {
    open: state.saveModal
  };
};
class SaveModal extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="title" id="modal-title">
            Text in a modal
          </Typography>
          <input
            accept="md/*"
            className={classes.input}
            name="untitled"
            id="raised-button-file"
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="raised"
              color="primary"
              component="span"
              className={classes.button}
            >
              Save file locally
            </Button>
          </label>
          <Typography variant="subheading" id="simple-modal-description">
          </Typography>
        </div>
      </Modal>
    );
  }
}

SaveModal.propTypes = {
  classes: PropTypes.object.isRequired
};
/*
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
*/
// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SaveModal);

export default connect(mapStateToProps)(SimpleModalWrapped);
