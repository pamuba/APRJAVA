import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        // console.log(this)
        this.setState({
            message:"Bye"
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick={this.clickHandler.bind(this)}>CLICK</button> */}
                {/* <button onClick={()=>this.clickHandler()}>CLICK</button> */}
                <button onClick={this.clickHandler}>CLICK</button>
            </div>
        )
    }
}

export default EventBind
