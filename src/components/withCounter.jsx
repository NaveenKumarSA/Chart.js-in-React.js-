import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
      constructor(props) {
          super(props)
      
          this.state = {
               counter:0, 

          }
      }
       
      
      
    render() {
      return <OriginalComponent
       name="iBridge"
        />;
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
