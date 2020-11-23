import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
      this.inputRef.current.focus();
        console.log(this.inputRef);

  }
 
  clickHandler = () =>{
      alert(this.inputRef.current.value);
  }
  
  render() {
     

    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.inputRef} />
        <button type="submit" onClick={this.clickHandler}> Click </button>
        <input type="text" ref={this.inputRef} />
      </div>    
    );
  }
}

export default RefsDemo;
