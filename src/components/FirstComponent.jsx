import React, { Component } from "react";
import "../assets/App.css";

class FirstComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      age: props.age,
      city: props.city,
      counter: props.counter
    };
     
     
  }

  render() {
         /*  const increaseCount = () => {
              this.setState ({
                  counter: this.state.counter + 1
              })
              console.log(this.state.counter)
          }; */
     
    return (
      <div
        className={this.state.counter % 2 === 0 ? "personDiv1" : "personDiv2"}
      >
        <h1> {this.state.name}</h1>
        <h3>  {this.state.age} </h3>
        <h3> {this.state.city}</h3>
      </div>
    );
  }
}

export default FirstComponent;
