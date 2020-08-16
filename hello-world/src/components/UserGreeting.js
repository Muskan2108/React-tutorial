import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggedIn: true
    }
}


    render() {

        //return this.state.isLoggedIn && <div>Welcome Vishwas</div>


        return(
            this.state.isLoggedIn?
            <div>Hello Vishwas</div>:
            <div>Hello Guest</div>
        )


        // let message
        // if(this.state.isLoggedIn){
        //     message = 'Hello Vishwas'
        // }
        // else{
        //     message = 'Hello Guest'
        // }
        // return(
        //     <div>{message}</div>
        // )


        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Vishwas</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }


        // return (
        //     <div>
        //         <div>Welcome Vishwas</div>
        //         <div>Welcome Guest</div>
        //     </div>
            
        // )
    }
}

export default UserGreeting
