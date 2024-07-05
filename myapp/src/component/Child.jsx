import React from 'react'
import { useCount } from '../context/CountContext'
import Children2 from './Children2'

function Child() {
    const {count,setCount} = useCount()
 
 
    return (
        <>
        <h1>Child component</h1>
        <h2>{count}</h2>
        <button onClick={()=> setCount(count+1)}>click</button> 
        <Children2 />
        </>

    )
}

export default Child