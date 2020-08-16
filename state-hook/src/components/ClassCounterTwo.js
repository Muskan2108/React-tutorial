import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
        console.log(this.state.count)
        this.setState((prevState)=>({
            count: prevState.count+1
        }),()=>{console.log('Callback value - ',this.state.count)})
    }

    decrement(){
        console.log(this.state.count)
        this.setState((prevState)=>({
            count: prevState.count-1
        }),()=>{console.log('Callback value - ',this.state.count)})
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
            <div>
                <button onClick={()=>this.setState({count: 0})}>Reset</button>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
                <button onClick={()=>this.incrementFive()}>Increment 5</button>
            </div>
            </div>
        )
    }
}

export default ClassCounterTwo
