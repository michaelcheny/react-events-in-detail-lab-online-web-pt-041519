// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = event => {
    event.persist();
    let ms = this.props.delay;
    setTimeout(() => this.props.onDelayedClick(event), ms);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>VROOM!</button>
      </div>
    );
  }
}
