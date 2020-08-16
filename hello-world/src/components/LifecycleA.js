import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Muskan'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return  null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    changeState = () =>{
        this.setState({
            name: 'Sweety'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            
            <div>
                Lifecycle A
                <div><button onClick={this.changeState}>Change State</button></div>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
