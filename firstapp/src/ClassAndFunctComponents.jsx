import React from "react";


class Navbar extends React.Component{
    constructor(){
        super()
        this.name='jyotiprakash'
    }
    render(){
        return(
            <div>
                <h1>this is class based component</h1>
                {/* <h2>{this.name}</h2> */}
                <h2>{this.props.name}</h2>
                <h2>{this.props.age}</h2>
                <h2>{this.props.gender}</h2>
                <h2>Address:{this.props.add}</h2>
            </div>
        )
    }
}
Navbar.defaultProps={
    name:"name is not available",
    add:"Address is not available",
}



// const Navbar=(props)=>{
//     console.log(props.owner)
//     return(
//         <div>
//             <h1>{props.message}</h1>
//             <h2>{props.owner.name}</h2>
//             <h2>{props.owner.age}</h2>
//             <h2>{props.owner.address}</h2>


//         </div>
//     )
// }

export default Navbar;