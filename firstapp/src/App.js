
import './App.css';

// import First from './First';

// import Navbar from './ClassAndFunctComponents';

// import ChildProps from './ChildProps';

// import DataBinding from './DataBinding';

// import State from './State';

// import Condition from './ConditionalRendering';

// import Function from './Function';

import UseRef from './UseRef';



function App() {
  // let user={name:"johnny" ,age:21,address:'blr'}

  //this is databinding
  // const getData=(str)=>{
  //   console.log(str)

  // }
  return (
    
    <div>
      {/* <h1>Hello this is app.js</h1> */}
      {/* <First></First> */}
      
      {/* <Navbar name={"johnny"} age={22} gender={'male'} /> */}
      
      {/* <Navbar owner={user} message={'hello i am function based props'}></Navbar> */}
      
      {/* <ChildProps message="it is props">
        hi this is children props
        {100+200}
        {user.name}
      </ChildProps> */}
      
      {/* <DataBinding getData={getData}/> */}

      {/* <State /> */}

      {/* <Condition/> */}

      {/* <Function></Function> */}

      <UseRef/>

    </div>
  );
}

export default App;
