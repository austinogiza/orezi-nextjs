import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner radius={20} color={"#1F1E1D"} stroke={2} visible={true} />
      </div>
    );
  }
}