import React from "react";
import { useState } from "react";

export default function Formtext(props) {
  
  const [text,setText] = useState('');  //1 state saved

  const onUpFunction = () =>{
      console.log("UpperCase button")
      setText(text.toUpperCase());
  }

  const onTextChange = (event)=>{
      setText(event.target.value);
  }

  const onLowFunction = () =>{
  console.log("LowerCase Button")
  setText(text.toLowerCase());
  }

  const onClearFunction = () => {
    const newtext = '' ; 
    setText(newtext);
  }


  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}


  return (
    <> 
     
    <div>

      <div className="form-group my-3">
       <h3 className = {`text-${props.mode===`light`?`dark`:`light`}`}>Enter your text</h3>
        <textarea className = {`form-control my-3 bg-${props.mode===`dark`?`dark`:`light`} text-${props.mode===`light`?`dark`:`light`}`} value ={text} rows="8" onChange = {onTextChange}/>
      </div>
      <button className = "btn btn-outline-primary my-2 mx-2" onClick = {onUpFunction}> UpperCase</button>
      <button className = "btn btn-outline-primary my-2 mx-2 " onClick = {onLowFunction}> LowerCase</button>
      <button className = "btn btn-outline-primary my-2 mx-2 " onClick = {onClearFunction}> Clear</button>
      <button className = "btn btn-outline-primary my-2 mx-2 " onClick = {handleCopy}> CopyText</button>
      <button className = "btn btn-outline-primary my-2 mx-2 " onClick = {handleExtraSpaces}> RemoveExtraSpaces</button>
    </div>

    <div>
      {/* used to count the no of words and letters in a paragraph.*/}
      <h3 className = {`my-3 text-${props.mode===`light`?`dark`:`light`}`}>Text Summary </h3>
      <p className = {`my-3 mx-2 text-${props.mode===`light`?`dark`:`light`}`}> {text.split(' ').filter((element)=>{ return element.length!==0}).length} words and {text.length} letters.</p>
      <h3 className = {`my-3 text-${props.mode===`light`?`dark`:`light`}`}> Result Preview</h3>
        <p className = {`my-3 mx-2 text-${props.mode===`light`?`dark`:`light`}`}>{text}</p> 
    </div>
    </>
  );
}
