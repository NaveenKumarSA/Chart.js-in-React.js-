import React, { Component } from "react";
import LifeCycleC from "./LifeCycleC";
class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "B Naveen",
    };
    console.log("B constructor");
  }

  static getDerivedStateFromProps() {
    return <>{console.log(" B getDerivedStateFromProps")}</>;
  }

  componentDidMount() {
    console.log(" B componentDidMount");
  }

  render() {
    return (
      <div>
        {console.log(`name is ${this.state.name}`)}
        <LifeCycleC />
      </div>
    );
    console.log("B Render ");
  }
}

export default LifeCycleB;
