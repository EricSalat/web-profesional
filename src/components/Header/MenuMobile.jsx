import * as React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import cv from "./cv.pdf";
import { FormattedMessage } from 'react-intl';
import { HiLanguage } from "react-icons/hi2";
import { langContext } from '../../context/langContext';
import { useContext, useState } from "react";


function MenuMobile({onClick, setLanguageIcon}) {

  const [languageIconMenu, setLanguageIconMenu] = useState(false)

  const idioma = useContext(langContext);

  return(
      <div className="mobile-menu-modal" >
        <div>
          <nav>
            <div className="mobile-menu-top">
              <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={onClick}/>
            </div>
            <div className="mobile-menu-bottom">
              <ul>
                <li><a onClick={onClick} href="#about"><FormattedMessage id="header.01" defaultMessage="Sobre mi" /></a></li>
                <li><a onClick={onClick} href="#experience"><FormattedMessage id="header.02" defaultMessage="Experiencia" /></a></li>
                <li><a onClick={onClick} href="#works"><FormattedMessage id="header.03" defaultMessage="Trabajos" /></a></li>
                <li><a onClick={onClick} href="#next"><FormattedMessage id="header.04" defaultMessage="Contacto" /></a></li>
              </ul>
              <Button
              texto={<FormattedMessage id="header.cv" defaultMessage="Currículum" />}
              href={cv}
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