import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

export Button = () => (
  <button>Simple button</button>
)

export class Lesson extends Component {

  static propTypes = {
    children: PropTypes.element,
  }

  static defaultProps = {
    children: null,
  }

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
    const { children } = this.props;

    return (
      <div>
        <div>{counter}</div>
        {React.cloneElement(children, {counter: this.state.counter})}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }

}
