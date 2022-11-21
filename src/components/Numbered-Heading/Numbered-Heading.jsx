import React from "react";
import "./Numbered-Heading.css";

function NumberedHeading(props) {
  return(
    <h2 className="numbered-heading">{props.texto}</h2>
  );
}

export default NumberedHeading;