import React,{useState} from 'react'

function WordCounter() {
    
    let [word,setWord]=useState("")
    
    
function upperCaseHandler(){
    
    // console.log(word.length)
    
        let x=word.toUpperCase(word)
        setWord(x)
    
    
}
function removeHandler(){
    setWord('')
}
const countWords=()=>{
    if(word){
      // let wordCount= word.trim().split(' ').length;
      // return wordCount
      let wordCount = 1
            let sentence = word.trim()
            for (let i = 0; i < sentence.length; i++) {
                if (sentence[i] === " ") {
                    wordCount++
                }
            }
            return wordCount
        }
        return 0
    
}




  return (
    <>
        <textarea cols={'40'} rows={'10'} onChange={(e)=>setWord(e.target.value)} value={word}/>
        <br /><br />
        <button onClick={upperCaseHandler}>Uppercase</button>
        <button onClick={removeHandler}>Remove</button>
        <h1>No. of characters :{word.length}</h1>
        <h1>No. of words :{countWords()}</h1>
    </>
  )
}

export default WordCounter;