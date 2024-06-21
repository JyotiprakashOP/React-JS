import React from "react";

function First(){
    // let msg="hello i am message";

    function Calc(){
        let age= 20
        if(age>18){
            return <h1>you can vote</h1>
        }
        else{
            return <h1>you can't vote</h1>
        }
    }
    Calc()
    return(
        
        <div>
             
            {/* <h3>This is our first component</h3>
            <h1>{msg}</h1>
            {console.log('hello')}
            <p>{12000+200*4000}</p> */}

            {/* <div>{
                10>5?<h1>10 is greater</h1>:<h1>5 is greater</h1>
                }</div> */}

            
        </div>
    )
}

export default First;