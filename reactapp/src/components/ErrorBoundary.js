import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    //Lifecycle hook
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return <h1>Something Went Wrong</h1>
        }
        //children refers to the component that we are rendering
        return this.props.children
    }
}

export default ErrorBoundary
