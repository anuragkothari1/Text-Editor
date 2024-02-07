import { useState } from "react"
import React from 'react'

const Textform = (props) => {
 const[text,settext]=useState("Enter Text Here");
 const handleonclickupper=()=>{
  let newtext=text.toUpperCase();
  settext(newtext)

 }
 const handleonclicklower=()=>{
  let newtext=text.toLowerCase();
  settext(newtext)

 }
 const handleonclickclear=()=>{
  let newtext=""
  settext(newtext)

 }
 const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  settext(newText);
}
const handleExtraSpaces = ()=>{
  let newtext = text.replace(/\s+/g, ' ').trim();
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
<button className=" btn btn-primary" onClick={handleonclickupper}>Convert to upper case</button>
<button className="mx-3 btn btn-primary" onClick={handleonclicklower}>Convert to lower case</button>
<button className="mx-3 btn btn-primary" onClick={handleonclickclear}>Clear Text </button>
<button className="mx-3 btn btn-primary" onClick={handleCapitalize}> Capitalize Text </button>
<button className="mx-3 btn btn-primary" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
    </div>
   
    <div className="container my-3"style={{color:(props.theme==='dark'?'white':'black')}} >
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words,{text.length} character </p>
    </div>
    
  
    </>
  )
}

export default Textform
