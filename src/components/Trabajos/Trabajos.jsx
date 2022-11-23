import React, { useState } from "react";
import TabButton from '../../components/TabButton/TabButton';
import FichaTrabajo from './FichaTrabajo/FichaTrabajo';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';



export default function Trabajos() {

  const arian = document.getElementById("arian");
  const poliedric = document.getElementById("poliedric");
  const ainkaa = document.getElementById("ainkaa");
  const adiplus = document.getElementById("adiplus");

  const arianDescription = document.getElementById("arian-description");
  const poliedricDescription = document.getElementById("poliedric-description");
  const ainkaaDescription = document.getElementById("ainkaa-description");
  const adiplusDescription = document.getElementById("adiplus-description");

  // var isArianOpen = arianDescription.classList.contains("inactive");
  // var isPoliedricOpen = poliedricDescription.classList.contains("inactive");
  // var isAinkaaOpen = ainkaaDescription.classList.contains("inactive");
  // var isAdiplusOpen = adiplusDescription.classList.contains("inactive");

  //crec que react no accepta "classList"

 



  return (
    <>
      <NumberedHeading texto="Donde he trabajado" />
      <div className="jobs">
        <div className="jobs-slider">
          <TabButton text="Arian International" class="tab-button-active" id="arian" 
          // style={"tab-button-active" ? "tab-button" : "tab-button-active"} 

          />
          <TabButton text="Polièdric" class="tab-button" id="poliedric" />
          <TabButton text="Ainkaa" class="tab-button" id="ainkaa" />
          <TabButton text="Adiplus Tech & Content" class="tab-button" id="adiplus" />
        </div>


        <FichaTrabajo
          display=""
          id="arian-description"
          role="Desarrollador de front-end"
          period="Julio - Octubre 2022"
          company="Arian International Projects"
          href="https://arianinternational.eu/"
          duty1="Desarrollo de la web con HTML, CSS y JavaScript."
          duty2="Adaptación de la web corporativa con diseño responsive a diferentes dispositivos"
          duty3="Mejora del tiempo de carga, la usabilidad y la experiencia de usuario"
          duty4="Incorporación de herramientas de medición para campañas de marketing digital."
        />

        <FichaTrabajo
          display="inactive"
          id="poliedric-description"
          role="Gestor de campañas SEM & PPC"
          company="Polièdric"
          href="https://poliedric.com/"
          period="Junio 2021 - Marzo 2022"
          duty1="Gestión de campañas publicitarias de pago por clic. Elaboración de la estrategia, diseño implementación, medición y análisis de la performance de los anuncios en Google Ads, Facebook Ads, Amazon Ads y Linkedin Ads."
          duty2="Adaptación de diseño responsive a distintos dispositivos. Mejora del tiempo de carga, la usabilidad, la experiencia de usuario (UX & UI) y el posicionamiento web (SEO)."
          duty3="Incorporación de herramientas de medición (Google Analytics, Tag Manager, Data Studio) para campañas de marketing."
          duty4="Automatización de procesos de trabajo."
        />
        <FichaTrabajo
          display="inactive"
          id="ainkaa-description"
          role="Desarrollador de front-end & Gestor"
          company="Ainkaa"
          href=""
          period="Marzo 2021 - Actualidad"
          duty1="Programa de creación de start-ups dirigido a jóvenes para crear una app móvil viable donde se realizó"
          duty2="Programación en HTML, CSS, Javascript y React."
          duty3="Diseño UX UI. Diseño de prototipos con Figma."
          duty4="Creación de planes de empresa, de negocio y viabilidad"
          duty5="Realización de plan de marketing e investigación de mercados"
          duty6="Elevator pitch y presentación de PMV para la búsqueda de financiación."
        />
        <FichaTrabajo
          display="inactive"
          id="adiplus-description"
          role="Periodista"
          href="https://www.linkedin.com/company/adiplus-techandcontent/"
          company="Adiplus Tech & Content"
          period="Octubre 2019 - Junio 2020"
          duty1="Redacción y edición de noticias y contenidos para el portal del sector gastronómico Pan&Pizza."
          duty2="Redacción de artículos para la revista Newspa."
          duty3="Redacció de noticias y artículos sobre seguros en Tiempo Seguro."
          duty4="Posicionamiento SEO."
          duty5="Elaboración de newsletters."
        />
      </div>
    </>
  );
}

