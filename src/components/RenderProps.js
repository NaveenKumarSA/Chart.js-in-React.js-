import React, { Component } from "react";

class RenderProps extends Component {
  render() {
    return <h1>{this.props.name(true)}</h1>;
  }
}

export default RenderProps;
