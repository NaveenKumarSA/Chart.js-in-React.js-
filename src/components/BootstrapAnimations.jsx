import React, { Component } from 'react'
import {ProgressBar} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

class BootstrapAnimations extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value:4, 
        }
        
    }

    render() {

        const myArrays = [
            {
                value:10,
            },
            {
                value:20,
            },
            {
                value:30,
            },
            {
                value:40,
            },
            {
                value:50,
            },
        ]

        const progressHandler =()=>{
            myArrays.forEach(myArray => {
                console.log(myArray.value)
            });
                
                this.setState({value : this.state.value})
                 console.log("progressHandler");
         
            
        }
        return (
          <div>
            <ProgressBar animated now={this.state.value } onMouseOver={()=> progressHandler()} />
          </div>
        );
    }
}

export default BootstrapAnimations
