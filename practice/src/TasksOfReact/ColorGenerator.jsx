import React, { useState } from "react";

function ColorGenerator() {
    let [red,setRed]=useState(0)
    let [green,setGreen]=useState(0)
    let [blue,setBlue]=useState(0)
    let [color,setColor]=useState('')




    function colorHandler(e){
        e.preventDefault()
        // console.log('hello')
        if(red>255){
            alert('please fill the input correctly for accurate color')
        }
        if(green>255){
            alert('please fill the input correctly for accurate color')
        }
        if(blue>255){
            alert('please fill the input correctly for accurate color')
        }

            setColor(`rgb(${red},${green},${blue})`);
            
        

        
        
    }
  return (
    <>
      <form action="" onSubmit={colorHandler}>
        <div>
          <label htmlFor="">Red :</label>
          <input type="number" onChange={(e)=>setRed(e.target.value)} value={red}/> <br />
          <br />
          <label htmlFor="">Green :</label>
          <input type="number"  onChange={(e)=>setGreen(e.target.value)} value={green}/>
          <br />
          <br />
          <label htmlFor="">Blue :</label>
          <input type="number" onChange={(e)=>setBlue(e.target.value)} value={blue}/> <br />
          <br />
        </div>
        <div>
            <button>Generate</button><br /><br />

        </div>
        <div id="colorBox" style={{height:'200px',width:'200px',border:'1px solid black',backgroundColor:color}}></div>
      </form>
    </>
  );
}

export default ColorGenerator;
