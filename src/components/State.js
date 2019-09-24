import React, {Component} from 'react'

class State extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome to the State learning'
        }
    }

    subscribe(){
        this.setState({
                message: 'Thanks For subscribing'
            })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.subscribe }>Subscribe</button>
            </div>
        )
    }
}

export default State