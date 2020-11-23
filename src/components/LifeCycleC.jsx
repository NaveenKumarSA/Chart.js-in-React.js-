import React, { Component } from "react";

class LifeCycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "C Naveen",
    };
    console.log("C constructor");
  }

  static getDerivedStateFromProps() {
    return <>{console.log(" C getDerivedStateFromProps")}</>;
  }

  componentDidMount() {
    console.log(" C componentDidMount");
  }

  render() {
    return <div>{console.log(`name is ${this.state.name}`)}</div>;
    console.log("C Render ");
  }
}

export default LifeCycleC;
