import React from "react";
import "./Header.css";
import Button from "../Button/Button";
// import logo from '../../assets/logos/favicon.png';
import { IoIosClose } from "react-icons/io";

function MenuMobile(props) {

  return(
    <div className="mobile-menu-modal" >
      <div>
        <nav>
          <div className="mobile-menu-top">
            <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={props.onClick}/>
          </div>
          <div className="mobile-menu-bottom">
            <ul>
              <li><a onClick={props.onClick} href="#about">Sobre mi</a></li>
              <li><a onClick={props.onClick} href="#experience">Experiencia</a></li>
              <li><a onClick={props.onClick} href="#works">Trabajos</a></li>
              <li><a onClick={props.onClick} href="#next">Contacto</a></li>
            </ul>
            <Button 
            texto="Currículum" 
            href="/cv.pdf"
            className="know-me-button"
          />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MenuMobile;