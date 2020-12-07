import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [add, setAdd] = useState(0);

  const handleAdd = () => {
    setAdd(add + 1);
  };

  return (
    <div>
      <Child handleAddProp={handleAdd} />
      <h1>{add}</h1>
    </div>
  );
}

export default Parent;
