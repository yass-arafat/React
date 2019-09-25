import React, { Component } from 'react'

class IfElse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        // Basic If Else Part
            // if (this.state.isLoggedIn){
            //    return <div> Welcome Yassir </div>
            // } else {
            //     return <div> Welcome Anonymous </div>
            // }
        
        // Element Variable Approach
        // let message
        // if(this.state.isLoggedIn) message = <div>Welcome Yassir</div>
        // else message = <div>Welcome Yassir</div>
        // return message

        // Ternary Operator Approach
        // return (this.state.isLoggedIn ? <div>Welcome Yassir</div> : <div> Welcome Anonymous</div>)

        // short circuit approach
        // if the situation is like we don'e need the else operation we just wanna check if condition
        return this.state.isLoggedIn && <div>Welcome Yassir</div>

    }
}

export default IfElse
