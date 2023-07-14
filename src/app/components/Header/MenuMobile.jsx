'use client'
import * as React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
// import cv_en from "./cv_en.pdf";
import { HiLanguage } from "react-icons/hi2";
import { useContext, useState } from "react";


function MenuMobile({onClick}) {

  const [languageIconMenu, setLanguageIconMenu] = useState(true)

  // const idioma = useContext(langContext);

  return(
      <div className="mobile-menu-modal animate__animated animate__fadeInRightBig animate__faster" >
        <div>
          <nav>
            <div className="mobile-menu-top">
              <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={onClick}/>
            </div>
            <div className="mobile-menu-bottom">
              <ul>
                <li><a onClick={onClick} href="#about">Sobre mi</a></li>
                <li><a onClick={onClick} href="#experience">Experiencia</a></li>
                <li><a onClick={onClick} href="#works">Trabajos</a></li>
                <li><a onClick={onClick} href="#next">Contacto</a></li>
              </ul>
              <Button
              texto="Currículum"
              // href={cv_en}
              className="know-me-button"
            />
              { languageIconMenu ? (
              <HiLanguage style={{color: "var(--verde)", marginTop: 30, cursor: "pointer" }} size="22" 
              onClick={() => {
              idioma.establecerLenguaje("en-GB"); 
              setLanguageIconMenu(false);
              }} />
          ) : (
              <HiLanguage style={{color: "var(--verde)", marginTop: 30, cursor: "pointer" }} size="22" 
              onClick={() => {
              idioma.establecerLenguaje("es-ES"); 
              setLanguageIconMenu(true);
              }} />      
          )}
            </div>
          </nav>
        </div>
      </div>
    
  );
}

export default MenuMobile;