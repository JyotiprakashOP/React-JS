import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate=useNavigate()
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    let user={
        username:"johnny",
        password:"1234"
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(username === user.username && password === user.password){
            setUsername('')
            setPassword('')
            navigate('/')
        }else{
            alert('please fill the form correctly')
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={submitHandler}>
            <tr>
                <td><label>Username :</label></td>
                <td><input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username}/></td>
            </tr>
            <tr>
                <td><label>Password :</label></td>
                <td><input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/></td>
            </tr>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login;