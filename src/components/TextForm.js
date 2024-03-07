import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleXClick = ()=>{
    let newText = "";
    for(let i=0;i<text.length;i++){
      if(i===0 || (i>1 && text[i-2] === ".")){
        newText = newText + text[i].toUpperCase();
      }
      else{
        newText = newText + text[i].toLowerCase();
      }
    }
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('my name is ankur saini. i am a student.');
  return  (
    <>
    <div className = "container">
      <h1 style ={{color: props.mode==="light"?"black":"white"}}>{props.headling}</h1>
      <div className="mb-3">
      <textarea className="form-control" value = {text} onChange = {handleOnChange} style ={{backgroundColor: props.mode==="dark"?"gray":"white", color: props.mode==="light"?"black":"white"}} id="myBox" rows="2"></textarea>
      </div>
      <button className = "btn btn-primary" onClick = {handleUpClick} style ={{backgroundColor: props.mode==="dark"?"white":"black", color: props.mode==="light"?"white":"black"}}>Convert to upper</button>
      <button className = "btn btn-primary mx-2" onClick = {handleLowClick} style ={{backgroundColor: props.mode==="dark"?"white":"black", color: props.mode==="light"?"white":"black"}}>Convert to lower</button>
      <button className = "btn btn-primary mx-2" onClick = {handleXClick} style ={{backgroundColor: props.mode==="dark"?"white":"black", color: props.mode==="light"?"white":"black"}}>Currect</button>
    </div>
    <div className = "container my-2" style ={{color: props.mode==="light"?"black":"white"}}>
      <h1>Your Text summary</h1>
      <p>No of letters = {text.length}</p>
      <p>No of words = {text.split(" ").length >1?text.split(" ").length:text.length===0?0:1}</p>
      <p>You can read it in {0.008*text.split(" ").length} minutes</p>
      <p>preview = {text.length>0 ? text:"Enter Your Text"}</p>
    </div>
    </>
  )
}
