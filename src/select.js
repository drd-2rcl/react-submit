import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';

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
  
  render() {

    const filterColors = (inputValue) => {
      return colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    
    const promiseOptions = inputValue =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(filterColors(inputValue));
        }, 1000);
    });

    const colourOptions = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

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