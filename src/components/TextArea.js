import React, { useState } from "react";
import chut from "./chut.mp3";

export default function TextArea(props) {
  const [text, setText] = useState("");
  let song = new Audio(chut);

  const onclickupCase = () => {
    setText(text.toUpperCase());
  };

  const onclickLoCase = () => {
    setText(text.toLowerCase());
  };

  const onclickCamelCase = () => {
    setText(text.toLowerCase());
  };

  const onclickPascalCase = () => {
    setText(text.toLowerCase());
  };

  const onclickClear = () => {
    setText("");
  };

  const onclickWarning = () => {
    alert("Datt teri ma ki chuut");
  };

  const onclickAlert = () => {
    song.play();
  };

  const textchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 style={{color : props.mode==="dark"?"white":"black"}}>{props.title}</h1>

        {/* text Area */}

        <textarea
          className={`form-control my-3 text-${props.mode==="dark"?"light":"dark"}`}
          style={{backgroundColor:props.mode==="light"?"white":"#1c1e3c"}}
          value={text}
          onChange={textchange}
          rows="10"
        >

        </textarea>


        <div>
          <button
            type="button"
            onClick={onclickupCase}
            className="btn btn-dark mx-1"
          >
            ConvertToUpperCase
          </button>
          <button
            type="button"
            onClick={onclickLoCase}
            className="btn btn-primary mx-1"
          >
            ConvertToLowerCase
          </button>
          <button
            type="button"
            onClick={onclickCamelCase}
            className="btn btn-secondary mx-1"
          >
            camelCase
          </button>
          <button
            type="button"
            onClick={onclickPascalCase}
            className="btn btn-success mx-1"
          >
            PascalCase
          </button>
          <button
            type="button"
            onClick={onclickClear}
            className="btn btn-danger mx-1"
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={onclickWarning}
            className="btn btn-warning mx-1"
          >
            Warning
          </button>
          <button
            type="button"
            onClick={onclickAlert}
            className="btn btn-info mx-1"
          >
            Alert
          </button>
        </div>
      </div>
      <div style={{color : props.mode==="dark"?"white":"black"}}>
        <h2 className="my-5" >Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
