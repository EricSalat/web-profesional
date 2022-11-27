import React, {useState} from "react";
import "./TabButton.css";

function TabButton(props) {

   
  return(
  <>
    <button 
    className={props.class} 
    id={props.id}
    onClick={props.onclick}
    // onClick={props.onclick}
    >{props.text}</button>
  </>  
    
  );

}

export default TabButton;