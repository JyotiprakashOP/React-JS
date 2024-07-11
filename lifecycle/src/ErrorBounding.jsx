import React, { Component } from 'react'

class ErrorBounding extends Component {
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(){
        console.log("getDerivedStateFromError method");
        return {hasError : true}
    }
    componentDidCatch(err,info){
        console.log("componentDidCatch method");
        console.log(err,info);
    }
  render() {
    return (
      <div>
        {
            this.state.hasError ? 
                <h1>some error in components</h1> :
                <div>{this.props.children}</div>
        }
      </div>
    )
  }
}

export default ErrorBounding