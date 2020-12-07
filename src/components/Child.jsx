import React from "react";
import { Button } from "react-bootstrap";

function Child(pro) {
  return (
    <div>
      <Button onClick={pro.handleAddProp}>Handle</Button>
    </div>
  );
}

export default Child;
