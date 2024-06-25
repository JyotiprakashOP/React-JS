
import './App.css';
// import First from './First';
import Navbar from './ClassAndFunctComponents';

function App() {
  // let user={name:"johnny" ,age:21,address:'blr'}
  return (
    
    <div>
      <h1>Hello this is app.js</h1>
      {/* <First></First> */}
      <Navbar name={"johnny"} age={22} gender={'male'} />
      {/* <Navbar owner={user} message={'hello i am function based props'}></Navbar> */}
    </div>
  );
}

export default App;
