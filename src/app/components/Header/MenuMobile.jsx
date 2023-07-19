'use client'
import * as React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { IoIosClose } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";


function MenuMobile(props) {

    // Obtener la URL actual
    const urlActual = window.location.href;

    // Definir los enlaces para ambos casos
    const enlaceWebPrincipal = "http://ericsalat.com";
    const enlaceOtroIdioma = "http://ericsalat.com/en";
  
    // Determinar cuál enlace utilizar según la URL actual
    const enlace = urlActual === enlaceWebPrincipal ? enlaceOtroIdioma : enlaceWebPrincipal;

  return(
      <div className="mobile-menu-modal animate__animated animate__fadeInRightBig animate__faster" >
        <div>
          <nav>
            <div className="mobile-menu-top">
              <IoIosClose style={{ color: "var(--verde)", cursor: "pointer"}} size="40" onClick={props.onClick}/>
            </div>
            <div className="mobile-menu-bottom">
              <ul>
                <li><a onClick={props.onClick} href="#about">{props.about}</a></li>
                <li><a onClick={props.onClick} href="#experience">{props.experience}</a></li>
                <li><a onClick={props.onClick} href="#works">{props.works}</a></li>
                <li><a onClick={props.onClick} href="#next">{props.next}</a></li>
              </ul>
              <Button
              texto="Resume"
              href="/CV_ERIC_SALAT_BADIA_ENG.pdf"
              target="_blank"
              className="know-me-button"
            />
            
              <Link href={enlace}>
                <HiLanguage style={{color: "var(--verde)", marginTop: 30, cursor: "pointer" }} size="22"
                 />
              </Link>
    
          
            </div>
          </nav>
        </div>
      </div>
    
  );
}

export default MenuMobile;