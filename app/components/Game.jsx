import React, { Component } from 'react';

import Counter from 'Counter';
import Button from 'Button';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isStrict: false,
      counter: 0,
      sequence: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  }
  render() {
    return (
      <div className="content">
        <h1>Simon Says</h1>
        <Counter count={this.state.counter} />
        <div className="buttons">
          <Button color="green" handleClick={this.handleClick} />
          <Button color="red" handleClick={this.handleClick} />
          <Button color="yellow" handleClick={this.handleClick} />
          <Button color="blue" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Game;
