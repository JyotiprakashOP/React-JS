import { useState } from "react";

function Condition(){
    let [num,setNum]=useState(0)
 
return(

    <>
    <h1>{num}</h1>
    <button onClick={()=> setNum(num+1)}>+</button>
    <button onClick={()=> setNum(num-1)}>-</button>
    {
       (num!==0) && ( num>0 ? <h1>it is positive</h1> : <h1>It is negetive</h1>)
        
    }
    
    {
        (num>0) && (num%2===0  ? <h1>it is even</h1>: <h1>it is odd</h1>)
    }
    
    

    </>
)
}
export default Condition;