import * as React from "react";
import Button from "../Button/Button";
import "./Header.css";
import logo from "../../assets/logos/favicon.png";
import { CgMenuRound } from "react-icons/cg";


function Header(props) {
  return (
    <header>
      <nav>
        <img src={logo} height="40" width="40" href="http://ericsalat.com/"></img>
        <div className="contenedor-menu">
          <ol>
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#works">Trabajos</a></li>
            <li><a href="#next">Contacto</a></li>
            <Button
              texto="Currículum"
              href="/cv.pdf"
              className="header-button"
            />
          </ol>



        </div>
      <div
      
        className="mobile-menu-toggle"
        onClick={props.onclick}>
        <CgMenuRound
          style={{ color: "var(--verde)", cursor: "pointer" }}
          size="40"
        />
      </div>
      </nav>
    </header>
  );
}

export default Header;