import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from '../data';

class SelectAsync extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  };


  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  }
  
  filterColors = (inputValue) => {
    return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
  
  promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

  render() {
    return (
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={ promiseOptions }
      />
    );
  }
    }

export default SelectAsync