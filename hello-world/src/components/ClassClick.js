import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Button clicked in ClassCLick')
    }
    render() {
        return (
            <div>
                <button
                onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
