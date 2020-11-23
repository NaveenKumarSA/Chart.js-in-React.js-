import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      mail: " ",
      phoneNumber: " ",
      tnc: false,
      nameError: false,
      emailError: false,
      phoneNumberError: false,
    };
  }
  handleEvents = (event, fieldName) => {
    // Every time the handle Events called this accepts the event as parameter

    if (fieldName === "name") {
      //validation for the user name
      let name1 = event.target.value;
      if (name1 < 6) {
        console.log("inside name length if block ");
        this.setState({ [fieldName]: event.target.value });
      } else {
        this.state.nameError = true;
        console.log("this is inside else block ");
      }
    } else {
    }
  };
  handleSubmit = (event) => {
    //this prevent the data when submit occurs from reloading
    event.preventDefault();
  };
  handleTnc = (event) => {
    console.log(event);
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="col-8"
        style={{ paddingTop: "30px", float: "right" }}
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <label>NAME :</label>
              </td>
              <td>
                <input
                  name="name"
                  type="text"
                  onChange={(event) => this.handleEvents(event, "name")}
                />
              </td>
            </tr>
            {this.state.nameError === true && (
              <div style={{ color: "red" }}>
                Name should be more than 6 characters
              </div>
            )}
            <tr>
              <td>
                <label>Email :</label>
              </td>
              <td>
                <input
                  name="mail"
                  onChange={(event) => this.handleEvents(event, "mail")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>PhoneNumber :</label>
              </td>
              <td>
                <input
                  name="phoneNumber"
                  onChange={(event) => this.handleEvents(event, "phoneNumber")}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" onChange={(event) => this.handleTnc()} />{" "}
                I accept the T&C
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
