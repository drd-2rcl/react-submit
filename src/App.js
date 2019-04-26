import React, { Component } from 'react';

import InputFoo from './inputFoo'

class App extends Component {
  constructor() {
    super();
    // this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }
  // state = {
  //   fromChild: ''
  // };
  
  handleData = (data) => {
    this.setState({
      fromChild: data
    });
  }
  
  render() {
    return (
      <div>
        <InputFoo handlerFromParant={this.handleData} /> 
        <h5>Received by parent:<br />{this.state.fromChild}</h5>
      </div>
    );
  }
}

export default App;
 