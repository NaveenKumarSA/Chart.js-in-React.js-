import React, { Component } from "react";
// import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "A Naveen",
      bool: false,
    };
    console.log("A constructor");
  }

  static getDerivedStateFromProps() {
    return <>{console.log(" A getDerivedStateFromProps")}</>;
  }

  componentDidMount() {
    return console.log(" A componentDidMount");
  }
  componentDidUpdate() {
    return console.log(" A componentDidUpdate");
  }
  getSnapshotBeforeUpdate() {
    return <>{console.log("A getSnapshotBeforeUpdate")}</>
  }

  render() {
    return (
      <div>
        {/* <LifeCycleB /> */ console.log("A Render ")}
        {this.state.bool === true && <h1> Hello World! </h1>}
        <button onClick={() => this.setState({ bool: true })}>
          Click Here
        </button>
        {console.log("Program ends here ")}
      </div>
    );
  }
}

export default LifeCycleA;
