import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }

    // in case of Approach 3. for approach 1 2 and 4 we don't need to initialize this handler
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // For Approach 3 we need this constructor
  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Goodbye'})
  // }

  // For Approach 4 we need this constructor
  clickHandler = () => {
    this.setState({message:'Goodbye'})
  }

  render() {
    return (
      <div>
          <div/>
        <div>{this.state.message}</div>

        {/* Approach 1 Not Efficient */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Approach 2 Not Efficient*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        
        {/* Approach 3 Efficient*/}
        {/* this approach will only be right if you define clickHandler in the constructor otherwise
        'this' will be remain undefined */}
         {/* <button onClick={this.clickHandler}>Click</button> */}
        
        {/* Approach 4 Efficient*/}
         <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind