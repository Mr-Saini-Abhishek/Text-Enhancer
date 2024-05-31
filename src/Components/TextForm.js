import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPERCASE", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LOWERCASE", "success")
  };
  const handleCpyText = () => {
    let newText = document.getElementById('input');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("COPIED to Clipboard", "success")
  
  };
  const handleExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are REMOVED", "success")

  };
  const handleItClick = () => {
    props.showAlert("Converted to ITALIC", "success")
  };
  const handleOnChange = (event) => {

    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="container" id="convert" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2 className="conv">CONVERT HERE </h2>
      </div>
      <div className="input container">
        <textarea name="input" value={text} id="input" cols="100" rows="7" placeholder="PLACE YOUR TEXT HERE" onChange={handleOnChange} style={{color: props.mode === 'dark'?'white':'black', backgroundColor: props.mode === 'dark'?'#241c1c':'white', border: props.mode === 'dark'?'5px solid white':'5px solid black'}} ></textarea>
      </div>
      <button type="button"className={`btn btn-dark mx-2`} style={{border: props.mode === 'dark'?'1px solid white':'1px solid black'}} onClick={handleUpClick}disabled={text.length===0}>CONVERT IN UPPERCASE</button>

      <button type="button" className={`btn btn-dark mx-1`} style={{border: props.mode === 'dark'?'1px solid white':'1px solid black'}}onClick={handleLoClick} disabled={text.length===0}> CONVERT IN LOWERCASE</button>
      <button type="button" className={`btn btn-dark mx-1`} style={{border: props.mode === 'dark'?'1px solid white':'1px solid black'}} onClick={handleItClick} disabled={text.length===0}>CONVERT IN ITALIC</button>
      <button type="button" className={`btn btn-dark mx-1`} style={{border: props.mode === 'dark'?'1px solid white':'1px solid black'}} onClick={handleCpyText} disabled={text.length===0}>COPY TO CLIPBOARD</button>
      <button type="button" className={`btn btn-dark mx-1`} style={{border: props.mode === 'dark'?'1px solid white':'1px solid black'}} onClick={handleExtraSpace} disabled={text.length===0}>TRIM SPACES</button>



      <div className="det">

        <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.split(" ").length-1} WORDS AND {text.length} CHARACHTERS</p>
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{0.008 * text.split("").length} Mins</p>
        <h2 style={{color: props.mode === 'dark'?'white':'black'}}>TEXT PREVEIW</h2>
        <p style={{color: props.mode === 'dark'?'white':'black'}}>{text}</p>
      </div>
    </div>
  );
}
