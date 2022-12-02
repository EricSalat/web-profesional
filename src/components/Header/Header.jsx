import * as React from "react";
import cv from "./cv.pdf";
import "./Header.css";
import Button from "../Button/Button";
import logo from "../../assets/logos/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { langContext } from '../../context/langContext';
import { useContext, useState } from "react";
import { FormattedMessage } from 'react-intl';



function Header({onclick}) {

  const idioma = useContext(langContext);

  const [languageIcon, setLanguageIcon] = useState(true)

  return (
    <header>
      <nav>
          <img src={logo} height="40" width="40" href="http://ericsalat.com/"></img>
          <div className="contenedor-menu">
            <ol>
              <li><a href="#about"><FormattedMessage id="header.01" defaultMessage="Sobre mi" /></a></li>
              <li><a href="#experience"><FormattedMessage id="header.02" defaultMessage="Experiencia" /></a></li>
              <li><a href="#works"><FormattedMessage id="header.03" defaultMessage="Trabajos" /></a></li>
              <li><a href="#next"><FormattedMessage id="header.04" defaultMessage="Contacto" /></a></li>              
              
              <Button
                texto={<FormattedMessage id="header.cv" defaultMessage="Currículum" />}
                href={cv}
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

              {/* <HiLanguage style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }} size="22" 
              onClick={() => idioma.establecerLenguaje("es-ES")} /> */}

              {/* <HiLanguage style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }} size="22" 
              onClick={() => idioma.establecerLenguaje("en-GB")} /> */}

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