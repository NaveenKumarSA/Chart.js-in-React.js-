import React, { useState } from "react";
export const FirstFnComponent = () => {
  const [dateTime, setDateTime] = useState("")
  var today = new Date();
  new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  
   var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
  setInterval(() => {
    setDateTime({dateTime : date + " " + time}) 
  }, 1000);
  
    
  return (
    <div>
      <h1>HelloWorld! </h1>
      <h2>Today is {Date()}</h2>
      <h3>{dateTime} </h3>
    </div>
  );
};

const anything = "hey";
export default anything;
