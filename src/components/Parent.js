import React, { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "SouriRaj",
    };
  }

  
  render() {
     const greetParent = () => {
        return alert(`Hello ${this.state.parentName} `);
      };
    return (
      <div>
        <button onClick={greetParent}> Click Me</button>
      </div>
    );
  }
}

export default Parent;
