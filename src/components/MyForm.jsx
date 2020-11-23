import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      bool: false,
      checkBoxValue: false,
      user: false,
      country: "IND",
    };
  }

  handleName = (event) => {
    if (!this.state.bool) {
      this.setState({ name: "" });
    } else {
      this.setState({ name: event.target.value });
    }
  };

  handleCheckBox = (event) => {
    {
      this.state.bool === false
        ? this.setState({ bool: true })
        : this.setState({ bool: false });
    }
  };
  handleUserName = (event) => {
    let userName = event.target.value;

    if (userName === 0) {
    } else {
      if (userName.length < 6) {
        this.setState({ user: false });
      } else {
        this.setState({ user: true });
      }
    }
  };
  handleSelect = (event) => {
    this.setState({ country: event.target.value });
    {
      console.log(this.state.country);
    }
  };
  handleSubmit= event =>{
   console.log(this.state)
  }
  render() {
    return (
      <div className="col-8" style={{ paddingTop: "30px", float: "right" }}>
        <label>NAME:</label>{" "}
        <input type="text" onChange={this.handleUserName} />
        {!this.state.user === true ? (
          <p style={{ color: "red" }}> Name is not upto the length </p>
        ) : (
          <p style={{ color: "green" }}> Name is upto the length </p>
        )}
        <label
          style={{ color: "gray", marginRight: "0px", paddingRight: "0px" }}
        >
          ADDRESS : Permenent as in Present
          <input type="checkbox" onChange={this.handleCheckBox} />
        </label>
        <br />
        <label> Present Address : </label>
        <textarea type="text" onChange={this.handleName} />
        <br />
        <br />
        <label> Permenent Address : </label>
        <textarea value={this.state.name} />
        <div>
          <label>Country : </label>
          <select onChange={this.handleSelect} value={this.state.country}>
            <option>IND</option>
            <option>USA</option>
            <option>AUS</option>
            <option>UAE</option>
          </select>
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default MyForm;
