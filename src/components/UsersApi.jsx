import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Col, Row, Button, ProgressBar } from "react-bootstrap";
class UsersApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {},
      loading: false,
      title: "",
      fname: "",
      lname: "",
    };
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: true });
    console.log(this.state.person);
    this.setState({
      title: this.state.person.name.title,
      fname: this.state.person.name.first,
      lname: this.state.person.name.last,
    });
  }

  render() {
    return (
      <div>
        {this.state.loading === true || !this.state.person ? (
          <div>
            <h1>
              {this.state.title +
                "." +
                this.state.fname +
                " " +
                this.state.lname}
            </h1>
            <h3>{this.state.person.gender}</h3>
          </div>
        ) : (
          <div style={{ marginTop: "250px", marginLeft:"250px"}}>
            <Row>
              <Spinner animation="border" variant="info"  />
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default UsersApi;
