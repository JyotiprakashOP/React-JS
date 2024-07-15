import React, { useState } from 'react'

function Task3() {

    const [label,setLabel]=useState('')
    const [inputType,setInputType]=useState('')
    const [form,setForm]=useState([])
    let inputTypes=['text','number','email','password','date','color','submit','reset','button','week','month','radio','checkbox']
    function generate(){
        let obj={
            label,
            inputType
        }
        setForm([...form,obj])
        setLabel('')
        setInputType('')
        
    }

    return (
    <>
    <label htmlFor="">Label :</label>
    <input type="text" onChange={(e)=> setLabel(e.target.value)} value={label}/><br/><br />
    <label htmlFor="">select input:</label>
    <select name="" id="" onChange={(e)=> setInputType(e.target.value)} value={inputType}>
        <option value="" selected>Select the type</option>
        {
            inputTypes.map(item=>{
                return <option value={item} >{item.toUpperCase()}</option>
            })
        }        

    </select><br /><br />
    <button onClick={generate}>Generate input</button>
    <hr />
    <form>
        {
            form.map(item =>{
                return <div>
                    <label htmlFor="">{item.label}</label>
                    <input type={item.inputType} value={item.inputType === "button" ? item.label : ''} placeholder={`enter your ${item.label}`}/>
                </div>
            })
        }
    </form>
    </>
  )
}

export default Task3;