import React from 'react'
import { useCount } from '../context/CountContext'
import Children3 from './Children3';


function Children2() {
    const {count,setCount}=useCount()
  return (
    <>
    <h1>child2</h1>
    <h2>{count}</h2>
    <Children3></Children3>
    </>
  )
}

export default Children2;