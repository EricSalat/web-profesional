import * as React from "react";
import { useState } from "react";
import TabButton from '../../components/TabButton/TabButton';
import FichaTrabajo from './FichaTrabajo/FichaTrabajo';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';


export default function Trabajos() {

  const [arian, setArian] = useState(true);
  const [poliedric, setPoliedric] = useState(false);
  const [ainkaa, setAinkaa] = useState(false);
  const [adiplus, setAdiplus] = useState(false);

  const [arianTab, setArianTab] = useState(true);
  const [poliedricTab, setPoliedricTab] = useState(false);
  const [ainkaaTab, setAinkaaTab] = useState(false);
  const [adiPlusTab, setAdiPlusTab] = useState(false);

  return (
    <>
      <NumberedHeading texto="Donde he trabajado" />
      <div className="jobs">
        <div className="jobs-slider">
          <TabButton
            text="Arian International"
            id="arian"
            class={arianTab ? "tab-button-active" : "tab-button-inactive"}
            onclick={() => {
              setArian(true); setPoliedric(false); setAinkaa(false); setAdiplus(false);
              setArianTab(true);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
            }}
          />
          <TabButton
            text="Polièdric"
            class={poliedricTab ? "tab-button-active" : "tab-button-inactive"}
            id="poliedric"
            onclick={() => {
              setArian(false); setPoliedric(true); setAinkaa(false); setAdiplus(false);
              setArianTab(false);
              setPoliedricTab(true);
              setAinkaaTab(false);
              setAdiPlusTab(false);

            }}
          />
          <TabButton text="Ainkaa"
            class={ainkaaTab ? "tab-button-active" : "tab-button-inactive"}
            id="ainkaa"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(true); setAdiplus(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(true);
              setAdiPlusTab(false);
            }} />
          <TabButton
            text="Adiplus Tech & Content"
            class={adiPlusTab ? "tab-button-active" : "tab-button-inactive"}
            id="adiplus"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(true);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(true);
            }}
          />
        </div>

        {arian ? (
          <FichaTrabajo
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
        ) : (
          null
        )}

        {poliedric ? (
          <FichaTrabajo

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
        ) : (
          null
        )}


        {ainkaa ? (
          <FichaTrabajo
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
        ) : (
          null
        )}


        {adiplus ? (
          <FichaTrabajo
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
        ) : (
          null
        )}
      </div>
    </>
  );
}

