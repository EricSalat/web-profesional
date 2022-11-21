import React, {useState} from "react";
import "./TabButton.css";

function TabButton(props) {

  // const [highlight, setHighlight] = useState();

  // const change = () => {
  //   if (highlight == true) {
  //     setHighlight("tab-button")
  //   }  else {
  //     setHighlight("tab-button-active")
  //   }
  // }

  return(
  <>
    <button className={props.class} 
    // onClick={change}
    >{props.text}</button>
  </>  
    
  );

}

export default TabButton;