import React, { Component } from 'react'

class input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default input
