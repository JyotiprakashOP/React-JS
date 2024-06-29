//this is class based component;

// import React from "react";

// class State extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0,
//             color:"red"
//         }
//     }
//     Increment=()=>{
//         this.setState({count:this.state.count+1})
//     }
//     Decrement=()=>{
        
//         if(this.state.count>0){
//             this.setState({count:this.state.count-1})
//         }
        
//     }
//     changeColor=()=>{
//         this.setState({color:'green'})
//     }

//     render(){
//         return(
//             <React.Fragment>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.Increment}>+</button>
//                 <button onClick={this.Decrement}>-</button>
//                 <div style={{height:"300px",
//                     width:"500px",
//                     backgroundColor:this.state.color
//                     }}></div>
//                 <button onClick={this.changeColor}>Change color</button>
                
//             </React.Fragment>
//         )
//     }
// }




//this is function based component;

import React,{useState} from "react";

const State=()=>{
    let [count,setCount]=useState(0);
    let[color,setColor]=useState('red')

    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    const changeColor=()=>{
        setColor(randomColor);
    }
    const randomColor=()=> {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increase</button>
            <button onClick={Decrement}>Decrease</button>
            <div style={{height:'300px',width:'500px',backgroundColor:color}}></div>
            <button onClick={changeColor}>Change Color</button>

        </>
    )
}
export default State;