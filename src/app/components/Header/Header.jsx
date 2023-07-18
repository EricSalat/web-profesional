'use client'
import * as React from "react";
import Image from 'next/image'
import "./Header.css";
import 'animate.css';
import Button from "../Button/Button";
import logo from "../../../../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { useContext, useState } from "react";



function Header({onclick}) {

  // const idioma = useContext(langContext);

  const [languageIcon, setLanguageIcon] = useState(true)

  return (
    <header>
      <nav className="animate__animated animate__fadeInDown animate__delay-2s">
           <Image  src={logo} height="40" width="40" href="http://ericsalat.com/en" />
          <div className="contenedor-menu">
            <ol>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#next">Contact</a></li>              
              
              <Button
                texto="Resume"
                href="/CV_ERIC_SALAT_BADIA_ENG.pdf"
                target="_blank"
                className="header-button"
              />
            </ol>

          { languageIcon ? (
              <HiLanguage style={{color: "var(--verde)", marginLeft: 15, cursor: "pointer" }} size="22"
              Link/>
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