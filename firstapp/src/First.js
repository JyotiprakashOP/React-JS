import React from "react";
// import pic from "./Background.png"
// import "./First.css"

function First(){
    
    // let fruits=["apple","banana","mango","kiwi","watermelon"]
    // let displayFruits=[]
    // for (let x of fruits){
    //     displayFruits.push(<li>{x}</li>)
    // }
    // return(
    //     <div>
    //         {displayFruits}
    //     {
    //         fruits.map((item)=>{
    //             return <h1>{item}</h1>
    //         })
    //     }
    //     </div>
        
    // )

    // let student = {name:'jyoti',age:22,address:'odisha'}
    // let arr=[]
    // for(let x in student){
    //     arr.push(<h1>{student[x]}</h1>)
    // }
    

    // return(
    //     <div>
    //         {arr}
    //         {
    //             Object.values(student).map((item)=>{
    //                 return(<h1>{item}</h1>)
    //             })
    //         }
    //         {
    //             Object.keys(student).map((item)=>{
    //                 return(<h1>{item}:{student[item]}</h1>)
    //             })
    //         }
    //     </div>
        
    // )


    //
    // return(
    //     <div>
    //         <img src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    //         alt="https://google.com" height={"500vh"}/>
    //         <img src={pic} alt="hello"/>
    //         <img src="/Background.png" alt="hello"/>
    //     </div>
    // )

    //creating table using object

    let obj=[
        {name:'jyoti',age:22,add:'odisha'},
        {name:'pranjal',age:30,add:'pune'},
        {name:'nirmal',age:24,add:'AP'}
    ]
return(
    <div>
        <table >
            <thead>
                <th>Name</th>
                <th>age</th>
                <th>Address</th>

            </thead>
            <tbody >
                {obj.map((item)=>{
                    return(<tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.add}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
)




}

export default First;