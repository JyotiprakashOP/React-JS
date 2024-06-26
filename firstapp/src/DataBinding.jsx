import React from "react";

//this is using class

class DataBinding extends React.Component{
    constructor(){
        super()
        
        this.msg='hello this is class message'
    }
    printHandler=()=>{
        this.props.getData('this is class component');
        console.log(this.msg);
    }
    render(){
        
        return(
            <div>
                
                <button onClick={this.printHandler}>Click Here</button>
            </div>
        )
    }
    
}






//this is using function

// const DataBinding=(props)=>{
// // console.log(props);

// function printHandler(){
//     props.getData('Hello i am Data binding')
// }


// return(
//     <div>
//         <button onClick={printHandler}>Click Here</button>
//     </div>
// )
// }
export default DataBinding;