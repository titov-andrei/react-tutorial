import React, { Component } from "react";

const Counter = () => (
  <h1>{`Counter component. Counter value is:`}</h1>
)

class CounterButton extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <div>{counter}</div>
        <Counter />
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default CounterButton;
