import React, { createContext, useContext, useState } from 'react'


const firstColor= createContext()

function ColorChange({children}) {
    const [color,setColor]=useState()
  return (
    <>
    <firstColor.Provider value={{color,setColor}}>
    {children}

    </firstColor.Provider>
    </>
  )
}



export function useColor(){
    return useContext(firstColor)
}

export default ColorChange