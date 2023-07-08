import React, { useState } from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowClick=()=>{
    console.log("LowerCase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClearClick=()=>{
   
    let newText="";
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText]=useState("");
  const handleReverseClick=(event)=>{
    let reverseText=text.split("")
    reverseText=reverseText.reverse();
    reverseText=reverseText.join("");
    setText(reverseText);
  }
  
  
  return (
    <>
    <div className="container">
<h3 style={{color:'#fafafa'}}>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse text</button>

  
    
    <h2 style={{textAlign:'center',color:'black'}}>Your text summary</h2>
    <p style={{textAlign:'center',color:'black'}}>{text.split(" ").length} words and {text.length} characters</p>
    <p style={{textAlign:'center',color:'black'}}>{0.008 * text.split(" ").length} Minutes Read</p>
    <h3 style={{textAlign:'center',color:'black'}}>Preview</h3>
    <p style={{textAlign:'center',color:'black'}}>{text}</p>
    </div>
    </>
  )
}
