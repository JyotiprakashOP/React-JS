import React from 'react'
import { useColor } from '../context/ColorChange'

function ColorChild1() {
    const {color,setColor}=useColor()
  return (
    <>
    <div style={{height:"100px" , width: "200px", backgroundColor:"red"}}></div>
    <button>click</button>
    
    </>
  )
}



export default ColorChild1