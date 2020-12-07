import React, { Component } from "react";
import "../assets/App.css";

class FirstComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "props.name",
      age: "props.age",
      city: "props.city",
      counter: "props.counter",
    };
  }

  render() {
    const { counter, name, city, age } = this.state;

    return (
      <div
        className={this.state.counter % 2 === 0 ? "personDiv1" : "personDiv2"}
      >
        <h1> {name}</h1>
        <h3> {age} </h3>
        <h3> {city}</h3>
        <h3> {counter}</h3>
      </div>
    );
  }
}

export default FirstComponent;
