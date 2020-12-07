import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";

export class TimerWithLifeCycleComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerF: 0,
      timerR: 60,
    };
  }

  render() {
    const { timerF, timerR } = this.state;
    return (
      <>
        <div className="container">
          <Grid className="row">
            <Grid item className="col-sm-4">
              One of three columns
            </Grid>
            <Grid item className="col-sm-4">
              One of three columns
            </Grid>
            <Grid item className="col-sm-4">
              One of three columns
            </Grid>
          </Grid>
        </div>

        <Box textAlign="center">
          <h1>This is my Timer </h1>
          <div className="row inline-block">
            <div className="col-5">
              <p className="">This goes Forward: {timerF}</p>
            </div>
            <div className="col-5">
              <p className="">This goes Reverse: {timerR}</p>
            </div>
          </div>
        </Box>
      </>
    );
  }
  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState({ timerF: this.state.timerF + 1 });
    }, 1000);
    setInterval(() => {
      this.setState({ timerR: this.state.timerR - 1 });
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };
}

export default TimerWithLifeCycleComponents;
