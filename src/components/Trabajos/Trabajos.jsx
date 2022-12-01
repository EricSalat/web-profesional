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
  const [diariAra, setDiariAra] = useState(false);

  const [arianTab, setArianTab] = useState(true);
  const [poliedricTab, setPoliedricTab] = useState(false);
  const [ainkaaTab, setAinkaaTab] = useState(false);
  const [adiPlusTab, setAdiPlusTab] = useState(false);
  const [diariAraTab, setDiariAraTab] = useState(false);

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
              setArian(true); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(false);
              setArianTab(true);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(false);
            }}
          />
          <TabButton
            text="Polièdric"
            class={poliedricTab ? "tab-button-active" : "tab-button-inactive"}
            id="poliedric"
            onclick={() => {
              setArian(false); setPoliedric(true); setAinkaa(false); setAdiplus(false); setDiariAra(false);
              setArianTab(false);
              setPoliedricTab(true);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(false);

            }}
          />
          <TabButton text="Ainkaa"
            class={ainkaaTab ? "tab-button-active" : "tab-button-inactive"}
            id="ainkaa"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(true); setAdiplus(false); setDiariAra(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(true);
              setAdiPlusTab(false);
              setDiariAraTab(false);
            }} />
          <TabButton
            text="Adiplus Tech & Content"
            class={adiPlusTab ? "tab-button-active" : "tab-button-inactive"}
            id="adiplus"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(true); setDiariAra(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(true);
              setDiariAraTab(false);
            }}
          />
          <TabButton
            text="Diari Ara"
            class={diariAraTab ? "tab-button-active" : "tab-button-inactive"}
            id="diariara"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(true);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(true);
            }}
          />
        </div>

        {arian ? (
          <FichaTrabajo
            id="arian-description"
            role="Desarrollador de Front-end"
            period="Julio - Octubre 2022"
            company="Arian International Projects"
            href="https://arianinternational.eu/"
            duty1="Desarrollo de la web con HTML, CSS y Wordpress."
            duty2="Adaptación de diseño responsive a distintos dispositivos. Mejora del tiempo de carga, la usabilidad, la experiencia de usuario (UX & UI) y el posicionamiento web (SEO)."
            duty3="Incorporación de herramientas de medición (Google Analytics, Tag Manager, Data Studio) para campañas de marketing."
            duty4="Automatización de procesos de trabajo."
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
            duty2="Invertí +10.000€ mensuales en campañas y aumenté el ROI en más del 300% en los negocios de diferentes clientes."
            duty3="Reuniones frecuentes con clientes para analizar los resultados y redefinir las estrategias de márqueting."
            duty4="Auditorías SEO de páginas web y diseño de estrategias para mejorar el posicionamiento."
          />
        ) : (
          null
        )}


        {ainkaa ? (
          <FichaTrabajo
            id="ainkaa-description"
            role="Desarrollador de Front-end & Project Manager"
            company="Ainkaa"
            period="Marzo 2021 - Actualidad"
            duty1="Programa de creación de start-ups dirigido a jóvenes para crear una app móvil viable donde se realizó:"
            duty2="Programación en HTML, CSS, Javascript y React. Diseño UX UI. Diseño de prototipos con Figma."
            duty3="Creación de planes de empresa, de negocio y viabilidad. Realización de plan de marketing e investigación de mercados."
            duty4="Elevator pitch y presentación de PMV para la búsqueda de financiación."
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
            duty3="Redacción de noticias y artículos sobre seguros en Tiempo Seguro."
            duty4="Diseño e implementación de estrategias de Posicionamiento SEO y campañas de email marketing."
          />
        ) : (
          null
        )}

        {diariAra ? (
          <FichaTrabajo
            id="diariara-description"
            role="Periodista"
            href="https://www.ara.cat/"
            company="Diari Ara"
            period="Septiembre 2018 - Mayo 2019"
            duty1="Redactor en prácticas de noticias, reportajes, entrevistas y otros contenidos en la sección de cultura sobre temas de música, literatura, cine, teatro y artes visuales."
            duty2="Cobertura de la actualidad diaria."
            duty3="Asistencia a ruedas de prensa."
            duty4="Colaboración puntual con otras secciones."
          />
        ) : (
          null
        )}
      </div>
    </>
  );
}

