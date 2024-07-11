import React, { useState } from "react";
// import ClassLifeCycle from "./ClassLifeCycle";
// import ErrorBounding from "./ErrorBounding";
// import UseEffect from "./UseEffect";
import ClassLifeCycle from "./ClassLifeCycle";


function App() {
  // const [flag, setFlag] = useState(true);
  return (
    <>
      <ClassLifeCycle color={"green"} />
    
      {/* <ErrorBounding>
        <button onClick={() => setFlag(false)}>Remove component</button>
        <button onClick={()=>setFlag(true)}>Add component</button>
        {
          flag && <ClassLifeCycle color={"green"} />
        }
      </ErrorBounding> */}
      {/* <UseEffect/> */}

    </>
  );
}

export default App;
