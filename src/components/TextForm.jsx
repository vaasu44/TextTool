import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  const handleClick = () => {
    //console.log("uppercase clicked");
    //let newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Successfully converted to uppercase", "success");
  }
  const handleClickLower = () => {
    setText(text.toLowerCase());
     props.showAlert("Successfully converted to lowercase", "success");
  } 
  const handleClear = ()=> {
    setText("");
    props.showAlert("Successfully text cleared", "success");
  }
  const handleClickCap = () => {
    let lowerCase = text.toLowerCase();
    let words = lowerCase.split(" ");
    let newWord = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWord.join(" ");
    setText(newText);
    props.showAlert("Successfully text is Capitalized", "success");
  }
  const handleClickInverse = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--){
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Successfully text is reversed", "success");
  }
  const handleClickSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    window.navigator.clipboard.writeText(text)
    props.showAlert("Successfully text is copied", "success");
  }
  return (
    <>
    <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h2 className='py-2'>{props.heading}</h2>
      <div className=" mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={(e) => setText(e.target.value)}
            placeholder='Enter your text here' style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }
          ></textarea>
        {/* <p>{ text}</p> */}
      </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClickLower}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClear}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClickCap}>Capitalize text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClickInverse}>Reverse text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClickSpeak}>Speak text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy text</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your text summary</h1>
        <p><b>{text.split(" ").filter((ele) => {
          return ele.length!==0
        }).length} </b>words and <b>{text.length}</b> characters</p>
        <p>{0.008 * text.split(" ").filter((ele) => {
          return ele.length!==0
        }).length} Minutes to read</p>
        
        <h3>Preview</h3>
        <p className='fs-6'>{text.length>0?text:"Enter something to see a preview"}</p>
      </div>
    </>
  )
}
