import React from "react";
const FirstFnComponent = (props) => {
  return (
    <div>
      <h1>HelloWorld! </h1>
      <h2>Today is {Date()}</h2>
      {props.time}
      <h3>- This is a functional component </h3>
    </div>
  );
};

export default FirstFnComponent; 
