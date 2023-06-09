import { useState } from "react"
import React from 'react'

const Textform = (props) => {
 const[text,settext]=useState("Enter Text Here");
 const handleonclick=()=>{
  let newtext=text.toUpperCase();
  settext(newtext)

 }
 const handleonchange=(event)=>
  {settext(event.target.value);}
  return (
    <>
    <div className="container" style={{color:(props.theme==='dark'?'white':'black')}}>
        <h1>Enter Your Text</h1>
      <div className="mb-3 ">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:(props.theme==='dark'?'grey':'white'),color:(props.theme==='dark'?'white':'black')}}id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleonclick}>Convert to upper case</button>
    </div>
   
    <div className="container my-3"style={{color:(props.theme==='dark'?'white':'black')}} >
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words,{text.length} character </p>
    </div>
    
  
    </>
  )
}

export default Textform
