import React, { useContext, useState , createContext} from 'react'

const CountContext = createContext();


function CountContextAPI({children}) {
    const [count, setCount] = useState(0)

    return (
        <>
            <CountContext.Provider value={{count,setCount}}>
                {children}
            </CountContext.Provider>
        </>
  )
}

export function useCount(){
    return useContext(CountContext);
}



export default CountContextAPI;