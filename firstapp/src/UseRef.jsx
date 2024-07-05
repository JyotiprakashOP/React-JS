// import React, { useRef } from 'react'

// function UseRef() {
//     // let nameRef = useRef('Jyotiprakash')
//     // console.log(nameRef)        //current-jyoitprakash
    
//     // function clickHandler(){
//     //     nameRef.current='johnny'        //it will not rerender
//     //     console.log(nameRef)
//     // }


//     const paraRef = useRef(null)
//     console.log(paraRef);

//     function printHandler(){
//         console.log(paraRef);
//         paraRef.current.innerHTML='HELLO JYOTIPRAKASH'
//         paraRef.current.style.backgroundColor="red"
//         paraRef.current.style.color='white'
//     }
//     return (
// //    <>
// //    <h1>useRef() Hook</h1>
// //    <h2>{nameRef.current}</h2>
// //    <button onClick={clickHandler}>change name</button>
// //    </>


// <>
//     <h1>useRef() Hook</h1>
//     <h2 ref={paraRef} >Hello Jyotiprakash !!</h2>
//     <button onClick={printHandler}>Click</button>
// </>
  
//  )

// }




// function UseRef(){

//     const usernameRef=useRef(null)
//     const passwordRef=useRef(null)
//     const usernameErrorRef=useRef(null)
//     const passwordErrorRef=useRef(null)
//     function printHandler(e){
//         e.preventDefault();
//         const username=usernameRef.current.value;
//         const password=passwordRef.current.value;
//         console.log(username,password);

//         //validation
//         if(!username || username.length <5){
//             usernameErrorRef.current.innerHTML='Enter valid username'
//             usernameErrorRef.current.style.color='red'
//         }else{
//             usernameErrorRef.current.innerHTML=""
//         }
//         if(!password || password.length <5){
//             passwordErrorRef.current.innerHTML='Enter valid password'
//             passwordErrorRef.current.style.color='red'
//         }else{
//             passwordErrorRef.current.innerHTML=""
//         }
//     }

//     return(
//         <>
//         <form onSubmit={printHandler}>
//             <label htmlFor="username">Username :</label>
//             <input type="text" id='username' ref={usernameRef}/>
//             <span id='usernameError' ref={usernameErrorRef}></span>
//             <br /><br />
//             <label htmlFor="password">Password :</label>
//             <input type="password" id='password' ref={passwordRef} />
//             <span id='passwordError' ref={passwordErrorRef}></span>
//             <br /><br />
//             <button>Login</button>
//         </form>
//         </>
//     )
// }



import React,{ Component } from 'react'
class UseRef extends Component {
    constructor(){
        super()
        this.usernameRef=React.createRef(null)
        this.passwordRef=React.createRef(null)
        this.usernameErrorRef=React.createRef(null)
        this.passwordErrorRef=React.createRef(null)
    }
    printHandler=(event)=>{
        event.preventDefault()
        const username=this.usernameRef.current.value;
                const password=this.passwordRef.current.value;
                console.log(username,password);
        
                //validation
                if(!username || username.length <5){
                    this.usernameErrorRef.current.innerHTML='Enter valid username'
                    this.usernameErrorRef.current.style.color='red'
                }else{
                    this.usernameErrorRef.current.innerHTML=""
                }
                if(!password || password.length <5){b
                    this.passwordErrorRef.current.innerHTML='Enter valid password'
                    this.passwordErrorRef.current.style.color='red'
                }else{
                    this.passwordErrorRef.current.innerHTML=""
                }
    }
  render() {

    return (
        <>
        <form onSubmit={this.printHandler}>
            <label htmlFor="username">Username :</label>
            <input type="text" id='username' ref={this.usernameRef}/>
            <span id='usernameError' ref={this.usernameErrorRef}></span>
            <br /><br />
            <label htmlFor="password">Password :</label>
            <input type="password" id='password' ref={this.passwordRef} />
            <span id='passwordError' ref={this.passwordErrorRef}></span>
            <br /><br />
            <button>Login</button>
        </form>
        </>
    )
  }
}




export default UseRef;