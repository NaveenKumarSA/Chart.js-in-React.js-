import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    render() {
      return (
        <div>
          <OriginalComponent name="iBridge" />;
          <h2>{" in parent " + this.state.counter}</h2>
        </div>
      );
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
