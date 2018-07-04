import React, { Component } from "react";
import MarkUpEditor from "./markUp";
import ButtonAppBar from "./ButtonAppBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      showKey: "false"
    };
    this.handlechange = this.handlechange.bind(this);
    this.keyButton = this.keyButton.bind(this);
  }
  handlechange(event) {
    console.log(event);
    //this.setState({checked: event.target.checked });
  }
  keyButton() {
    console.log("keyButton");
    this.setState({ showKey: !this.state.showKey });
    //this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <ButtonAppBar
          handlechange={this.handlechange}
          checked={this.state.checked}
          keyButton={this.keyButton}
        >        
        </ButtonAppBar>
        <MarkUpEditor keyButton={this.keyButton} showKey={this.state.showKey} />
        
      </div>
    );
  }
}

export default App;
/*
          <Button variant="raised" color="primary">
            <AccessAlarmIcon />
          </Button>


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
  

    );
  }
}

export default App;

*/
