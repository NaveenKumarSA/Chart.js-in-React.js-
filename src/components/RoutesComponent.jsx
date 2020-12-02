import React, { Component } from "react";
import Moment from "react-moment";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import "../assets/App.css";

const titleCard = () => {
  return <h1> Home </h1>;
};
const Nomatch = () => {
  return (
    <>
      {" "}
      <h2>Sorry, No match found!</h2>
    </>
  );
};
const Hello = () => {
  return (
    <>
      <h1>About</h1>{" "}
    </>
  );
};
const NavBar = () => {
  return (
    <div style={{ backgroundColor: "#cae" }}>
      <h2>Contact </h2>
    </div>
  );
};
let menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/About",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];
export class RoutesComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {menu.map((x, i) => {
            return (
              <div style={{ display: "inline-block" }}>
                <NavLink exact activeClassName="active" to={x.path} key={i}>
                  {x.name}
                </NavLink>{" "}
                <span>|</span>
              </div>
            );
          })}
          <Switch>
            <Route exact path="/" component={titleCard} />
            <Route exact path="/About" component={Hello} />
            <Route exact path="/Contact" component={NavBar} />
            <Route component={Nomatch} />
          </Switch>
          <Moment local>2018-11-01T12:59-0500</Moment>
          <Route component={Footer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default RoutesComponent;
