import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick =()=> {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to uppercase","success");
  }
  const handleLoClick =()=> {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("convert to lowercase","success");
  }
  const handleOnchange =(event)=> {
    // console.log("On change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    
    
  }

  const handleExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const[text, setText]= useState(' ');
  // text='New text';
  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange ={handleOnchange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-success mx-2"onClick={handleUpClick}>convert to Lover case</button>
  <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lover case</button>
  <button type="button" class="btn btn-warning mx-2"onClick={handleCopy}>copy Text</button>
  <button type="button" class="btn btn-warning mx-2"onClick={handleExtraSpaces}>handle Extra space </button>
  </div>
 
  <div className='container mb-3'  style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summery</h1>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text:"Enter something into preview it here"}</p>
  </div>
  </>
  )
}
