import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      time: [Date()],
    };
  }
  renderTime = () =>{
      
  }
  
  render() {
    return (
      <div>
        <h2 style={{color:" tomato "}}>{this.props.name}</h2>
        <h1
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          clicked {this.state.counter} times
        </h1>
     
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
