import React, { useState } from 'react'

function Function() {
  const [username,setUsername]=useState('')
  const [usernameError,setUsernameError]=useState('')
  const [password,setPassword]=useState('')
  const [passwordError,setPasswordError]=useState('')
  function usernameHandler(event){
    let value=event.target.value;
    setUsername(value)
    // console.log(value)
    if(value.length < 5){
      setUsernameError('username is too short')
    }
    else{
      setUsernameError('')
    }
  }
  function passwordHandler(e){
    let value=e.target.value;
    setPassword(value)
    // console.log(value)
    if(value.length < 5){
      setPasswordError('invalid password');
    }else{
      setPasswordError('')
    }
  }
  function formSubmit(e){
    e.preventDefault()
    if(usernameError && passwordError){
      alert('please fill the details correctly')

    }
    else{
      console.log(username,password);
      setUsername('')
      setPassword('')
    }
  } 
  return (
    <>
      <h1>Controlled function component form</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="username" >Username :</label>
        <input type="text" id='username' onChange={usernameHandler} value={username}/>
        <span style={{color:'red'}}>{usernameError}</span>
        <br /><br />
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' onChange={passwordHandler} value={password}/>
        <span style={{color:'red'}}>{passwordError}</span>
        <br /><br />
        <button>Login</button>
      </form>
      </>
  )
}







// import React, { Component } from 'react';
// class Function extends Component {
//   constructor(){
//     super()
//     this.state={
//       username:'',
//       password:'',
//       usernameError:'*',
//       passwordError:'*'
//     }
//   }

//   usernameHandler=(e)=>{
//     let value = e.target.value;
//     if(value.length < 8 ){
//       this.setState({usernameError:"invalid"})
//     }
//     else{
//       this.setState({usernameError:""})
//     }
//     this.setState({username:value})
//   }


// passwordHandler=(event)=>{
//   let value=event.target.value;
//   this.setState({password:value})
//   if(value.length < 6){

//     this.setState({passwordError:'password is too short'})
//   }else{
//     this.setState({passwordError:''})
//   }
// }
// submitHandler=(event)=>{
// event.preventDefault();
// console.log(this.state.username,this.state.password);

// }
//   render() {
//     return (
//       <>
//         <form onSubmit={this.submitHandler}>
//         <label htmlFor="username" >Username :</label>
//         <input type="text" id='username' onChange={this.usernameHandler}/>
//         <span style={{color:'red'}}>{this.state.usernameError}</span>
//         <br /><br />
//         <label htmlFor="password">Password :</label>
//         <input type="password" id='password' onChange={this.passwordHandler}/>
//         <span style={{color:'red'}}>{this.state.passwordError}</span>
//         <br /><br />
//         <button>Login</button>
//         </form>
//       </>
//     )
//   }
// }



export default Function;