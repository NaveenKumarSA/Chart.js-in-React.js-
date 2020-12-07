import { CircularProgress, LinearProgress } from "@material-ui/core";
import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export class SetIntervalAnimations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationStatus: true,
    };
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        animationStatus: false,
      });
    }, 3000);
  };

  render() {
    const { animationStatus } = this.state;
    return (
      <div>
        {animationStatus ? (
          <>
            <div className="container text-center mt-5 pt-5 justify-content-center w-25">
              <h2>In Progress </h2>
              <LinearProgress  color="secondary"/>
            </div>
          </>
        ) : (
          <div className="container text-center mt-5 pt-5 justify-content-center w-25">
            <h1>Hello World ! </h1>
          </div>
        )}
      </div>
    );
  }
}

export default SetIntervalAnimations;
