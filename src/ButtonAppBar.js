import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FileInputComponent from "./fileInputComponent";
import { saveFile, openFile, toggleKey } from "./redux/reducers";
import { connect } from "react-redux";

const styles = {
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
const mapStateToProps = state => {
  return { showKey: state.showKey };
};
const mapDispatchToProps = { toggleKey, saveFile, openFile };

function ButtonAppBar(props) {
  const { classes } = props;
  console.log("props", props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Markdown Editor
          </Typography>
          <FileInputComponent />

          <Button color="inherit" onClick={props.saveFile}>
            Save
          </Button>
          <Button color="inherit" onClick={props.toggleKey}>
            {props.showKey === true ? "Hide key" : "Show Key"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
/*          <input
            accept="md/*"
            className={classes.input}
            name="untitled"
            id="open-button"
            type="file"
            ref={node=>{
              fileInput=node;
              props.openFile(fileInput)
            console.log(fileInput)}}
          />
                    <label htmlFor="open-button">
            <Button
              color="inherit"
              component="span"
              className={classes.button}
            >
                          Open
            </Button>
            </label>*/
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ButtonAppBar));
