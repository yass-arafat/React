import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        // before ES6 syntax
        // alert('Hello ' +  this.state.parentName)

        //after ES6
        alert(`Hello ${this.state.parentName} from ${childName}`)

    }
    
    render() {
        return (
            <div>
                {/* remember no parenthesis. this is known as template handler */}
                <ChildComponent greetHandler={this.greetParent}/> 
            </div>
        )
    }
}

export default ParentComponent

