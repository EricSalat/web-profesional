'use client'
import * as React from "react";
// import cv_es from "./cv_es.pdf";
// import cv_en from "./cv_en.pdf";
import "./Header.css";
import 'animate.css';
import Button from "../Button/Button";
import logo from "../../assets/logos/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { useContext, useState } from "react";



function Header({onclick}) {

  // const idioma = useContext(langContext);

  const [languageIcon, setLanguageIcon] = useState(true)

  return (
    <header>
      <nav className="animate__animated animate__fadeInDown animate__delay-2s">
          <img src={logo} height="40" width="40" href="http://ericsalat.com/"></img>
          <div className="contenedor-menu">
            <ol>
              <li><a href="#about">Sobre mi</a></li>
              <li><a href="#experience">Experiencia</a></li>
              <li><a href="#works">Trabajos</a></li>
              <li><a href="#next">Contacto</a></li>              
              
              <Button
                texto="Currículum"
                // href={cv_es}
                className="header-button"
              />
            </ol>

          { languageIcon ? (
              <HiLanguage style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }} size="22" 
              onClick={() => {
              idioma.establecerLenguaje("en-GB"); 
              setLanguageIcon(false)}} />
          ) : (
              <HiLanguage style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }} size="22" 
              onClick={() => {
              idioma.establecerLenguaje("es-ES"); 
              setLanguageIcon(true)}} />      
          )}
          </div>
          <div
            className="mobile-menu-toggle"
            onClick={onclick}>
            <BiMenuAltRight
              style={{ color: "var(--verde)", cursor: "pointer" }}
              size="40"
            />
          </div>
      </nav>
    </header>
  );
}

export default Header;