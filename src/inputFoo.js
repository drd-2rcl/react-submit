import React, { Component } from 'react';

class InputFoo extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: ''
    }
  }
  // state = {
  //   inputField: ''
  // }
  
  // submitHandler(evt) {
  //   evt.preventDefault();
  //   // pass the input field value to the event handler passed
  //   // as a prop by the parent (App)
  //   this.props.handlerFromParant(this.state.inputField);
    
  //   this.setState({
  //     inputField: ''
  //   });
  // }
  
  // handleChange(event) {
  //   this.setState({
  //     inputField: event.target.value
  //   });
  // }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.handlerFromParant(this.state.inputField);
    this.setState({
      inputField: ''
    });
  }
  handleChange = (event) => {
    this.setState({
      inputField: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input 
            type="text" 
            id="theInput" 
            value={this.state.inputField} 
            onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <h5>Visible in child:<br />{this.state.inputField}</h5>
      </div>
    );
  }
}

export default InputFoo