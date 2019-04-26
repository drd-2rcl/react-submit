import React, { Component } from 'react';

import InputFoo from './inputFoo'

const ThemeContext = React.createContext('claro');

class App extends Component {
  constructor() {
    super();
    this.state = {
      fromChild: '',
      theme:  'light,'
    };
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    });
  }

  
  handleData = (data) => {
    this.setState({
      fromChild: data
    });
  }

  themedButton = (props) => {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <a style={{ backgroundColor: theme === 'dark' ? '#333' : '#CCC' }}>
              Meu botão
            </a>
          )
        }
      </ThemeContext.Consumer>
    )
  }
  
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <button onClick={this.changeTheme}>Alterar tema</button>
        </ThemeContext.Provider>
        <InputFoo handlerFromParant={this.handleData} /> 
        <h5>Received by parent:<br />{this.state.fromChild}</h5>
      </div>
    );
  }
}

export default App;
 