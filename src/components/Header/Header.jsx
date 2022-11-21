import React from "react";
import Button from "../Button/Button";
import "./Header.css";

function Header() {
  return(
    <header>
    <nav>
      <span>ÈS</span>
      <div>
        <ol>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#">Trabajos</a></li>
          <li><a href="#">Contacto</a></li>
          <Button 
            texto="Currículum" 
            href="#"
            className="header-button"
          />
        </ol>
      </div>
    </nav>
  </header>  
  );
}

export default Header;