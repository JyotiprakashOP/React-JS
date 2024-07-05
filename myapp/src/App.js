
// import Child from "./component/Child";
// import React from "react";
// import CountContextAPI from "./context/CountContext";


// function App() {
//   return (
//     <>
     
// <CountContextAPI>
//   <Child></Child>
// </CountContextAPI>
//     </>
//   );
// }

// export default App;

import React from 'react'
import ColorChange from './context/ColorChange'
import ColorChild1 from './component/ColorChild1'

function App() {
  return (
    <div>
      <ColorChange>
      <ColorChild1/>
      </ColorChange>
    </div>
  )
}

export default App
