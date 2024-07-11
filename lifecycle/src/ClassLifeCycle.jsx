import React, { Component } from 'react'

class ClassLifeCycle extends Component {
    constructor(){
        super()
        this.user="jyoti"
        this.state={
            count:0,
            color:"red"
        }
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log(props,state);
    //     console.log("getDerivedStateFromProps");
    //     // return {color:props.color}
    // }

    // componentDidMount(){
    //     console.log("componentDidMount")
    // }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate");
    //     return true;
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        return {count:prevState.count}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate");
    
        console.log(snapshot);
    }




    render() {
    return (
        <>
            <h1>class based lifecycle component</h1>
            <h2>{this.name}</h2>
            <h1 style={{
                height:"200px",
                backgroundColor:this.state.color
            }}>{this.state.count}</h1>

            <button onClick={()=>this.setState({count:this.state.count + 1})}>increment</button>
            <button onClick={()=>this.setState({color:"blue"})}>color change</button>
        
        </>

    )
  }
}

export default ClassLifeCycle