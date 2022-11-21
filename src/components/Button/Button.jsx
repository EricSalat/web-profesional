import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <a 
      href={props.href}
      >
        <button type="button" className={props.className}>{props.texto}</button>
      </a>
    </>
  );
}

export default Button;