import React, { Component } from 'react'
import  PureComp  from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"John"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"John"
            })
        },2000)
    }
    render() {
        console.log("****************************************************Parent Component********************************")
        return (
            <div>
                <h2>Parent COmponent</h2>
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
