import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes

// Node:
// Component.propTypes = {
//   node: PropTypes.node,
// }

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

export class Lesson extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <div>{counter}</div>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }

}
