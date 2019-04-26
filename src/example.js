import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from '../data';

state = {
  inputValue: '',
};

const filterColors = (inputValue: '') => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class AsyncMulti extends Component {
  state = { inputValue: '' };
  handleInputChange = (newValue: '') => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <AsyncSelect
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
    );
  }
}

// reference https://react-select.com/async