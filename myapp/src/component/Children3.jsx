import React from 'react'
import { useCount } from '../context/CountContext'

function Children3() {
    const {count,setCount}=useCount()
  return (
    <>
    <h1>Child 3</h1>
    <h2>{count}</h2>    
    </>
  )
}

export default Children3;