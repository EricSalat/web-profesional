'use client'
import * as React from "react";
import { useState } from "react";
import TabButton from '../../components/TabButton/TabButton';
import FichaTrabajo from './FichaTrabajo/FichaTrabajo';
import NumberedHeading from '../../components/Numbered-Heading/Numbered-Heading';
// import { FormattedMessage } from 'react-intl';



export default function Trabajos() {

  const [digitalResponse, setDigitalResponse] = useState(true)
  const [arian, setArian] = useState(false);
  const [poliedric, setPoliedric] = useState(false);
  const [ainkaa, setAinkaa] = useState(false);
  const [adiplus, setAdiplus] = useState(false);
  const [diariAra, setDiariAra] = useState(false);

  const [digitalResponseTab, setDigitalResponseTab] = useState(true)
  const [arianTab, setArianTab] = useState(false);
  const [poliedricTab, setPoliedricTab] = useState(false);
  const [ainkaaTab, setAinkaaTab] = useState(false);
  const [adiPlusTab, setAdiPlusTab] = useState(false);
  const [diariAraTab, setDiariAraTab] = useState(false);
  
  return (
    <>
      <NumberedHeading texto={<FormattedMessage id="jobs.title" defaultMessage="Donde he trabajado"/>} />
      <div className="jobs">
        <div className="jobs-slider">
    
              <TabButton
              text="Digital Response"
              class={digitalResponseTab ? "tab-button-active" : "tab-button-inactive"}
              id="digital"
              onclick={() => {
                setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(false); setDigitalResponse(true);
                setArianTab(false);
                setPoliedricTab(false);
                setAinkaaTab(false);
                setAdiPlusTab(false);
                setDiariAraTab(false);
                setDigitalResponseTab(true);
              }}
              />

          <TabButton
            text="Arian International"
            id="arian"
            class={arianTab ? "tab-button-active" : "tab-button-inactive"}
            onclick={() => {
              setArian(true); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(false); setDigitalResponse(false);
              setArianTab(true);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(false);
              setDigitalResponseTab(false);
            }}
          />
          <TabButton
            text="Polièdric"
            class={poliedricTab ? "tab-button-active" : "tab-button-inactive"}
            id="poliedric"
            onclick={() => {
              setArian(false); setPoliedric(true); setAinkaa(false); setAdiplus(false); setDiariAra(false); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(true);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(false);
              setDigitalResponseTab(false);

            }}
          />
          <TabButton text="Ainkaa"
            class={ainkaaTab ? "tab-button-active" : "tab-button-inactive"}
            id="ainkaa"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(true); setAdiplus(false); setDiariAra(false); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(true);
              setAdiPlusTab(false);
              setDiariAraTab(false);
              setDigitalResponseTab(false);
            }} />
          <TabButton
            text="Adiplus Tech & Content"
            class={adiPlusTab ? "tab-button-active" : "tab-button-inactive"}
            id="adiplus"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(true); setDiariAra(false); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(true);
              setDiariAraTab(false);
              setDigitalResponseTab(false);
            }}
          />
          <TabButton
            text="Diari Ara"
            class={diariAraTab ? "tab-button-active" : "tab-button-inactive"}
            id="diariara"
            onclick={() => {
              setArian(false); setPoliedric(false); setAinkaa(false); setAdiplus(false); setDiariAra(true); setDigitalResponse(false);
              setArianTab(false);
              setPoliedricTab(false);
              setAinkaaTab(false);
              setAdiPlusTab(false);
              setDiariAraTab(true);
              setDigitalResponseTab(false);
            }}
          />
        </div>

        {digitalResponse ? (
          <FichaTrabajo
          id="digital-description"
          role={<FormattedMessage id="jobs.digital" defaultMessage="Frontend and Email Developer" />}
          href="https://www.digitalresponse.es/"
          company="Digital Response"
          period={<FormattedMessage id="jobs.digital-dates" defaultMessage="Enero 2023 - Actualidad" />}
          duty1={<FormattedMessage id="jobs.digital-duty1" defaultMessage="Maquetación de campañas de email para CaixaBank en HTML, CSS y JavaScript." />}
          duty2={<FormattedMessage id="jobs.digital-duty2" defaultMessage="Programación responsive para los distintos clientes de correo." />}
          duty3={<FormattedMessage id="jobs.digital-duty3" defaultMessage="Maquetación pixel perfect en base a mockups de Adobe XD" />}
          duty4={<FormattedMessage id="jobs.digital-duty4" defaultMessage="Publicación y seguimiento de campañas Customer Journey con Adobe Campaigns." />}
          />
          ) : (
            null
            )}

        {arian ? (
          <FichaTrabajo
            id="arian-description"
            role={<FormattedMessage id="jobs.arian" defaultMessage="Desarrollador de Front-end"/>}
            period={<FormattedMessage id="jobs.arian-dates" defaultMessage="Julio - Octubre 2022"/>}
            company="Arian International Projects"
            href="https://arianinternational.eu/"
            duty1={<FormattedMessage id="jobs.arian-duty1" defaultMessage="Desarrollo de la web con HTML, CSS y Wordpress."/>}
            duty2={<FormattedMessage id="jobs.arian-duty2" defaultMessage="Adaptación de diseño responsive a distintos dispositivos. Mejora del tiempo de carga, la usabilidad, la experiencia de usuario (UX & UI) y el posicionamiento web (SEO)."/>}
            duty3={<FormattedMessage id="jobs.arian-duty3" defaultMessage="Incorporación de herramientas de medición (Google Analytics, Tag Manager, Data Studio) para campañas de marketing."/>}
            duty4={<FormattedMessage id="jobs.arian-duty4" defaultMessage="Automatización de procesos de trabajo."/>}
            />
            ) : (
              null
              )}

        {poliedric ? (
          <FichaTrabajo
          id="poliedric-description"
          role={<FormattedMessage id="jobs.poliedric" defaultMessage="Gestor de campañas SEM & PPC"/>}
          company="Polièdric"
          href="https://poliedric.com/"
          period={<FormattedMessage id="jobs.poliedric-dates" defaultMessage="Junio 2021 - Marzo 2022"/>}
          duty1={<FormattedMessage id="jobs.poliedric-duty1" defaultMessage="Gestión de campañas publicitarias de pago por clic. Elaboración de la estrategia, diseño implementación, medición y análisis de la performance de los anuncios en Google Ads, Facebook Ads, Amazon Ads y Linkedin Ads."/>}
          duty2={<FormattedMessage id="jobs.poliedric-duty2" defaultMessage="Invertí +10.000€ mensuales en campañas y aumenté el ROI en más del 300% en los negocios de diferentes clientes." />}
          duty3={<FormattedMessage id="jobs.poliedric-duty3" defaultMessage="Reuniones frecuentes con clientes para analizar los resultados y redefinir las estrategias de márqueting." />}
          duty4={<FormattedMessage id="jobs.poliedric-duty4" defaultMessage="Auditorías SEO de páginas web y diseño de estrategias para mejorar el posicionamiento." />}
          />
          ) : (
            null
            )}


        {ainkaa ? (
          <FichaTrabajo
          id="ainkaa-description"
          role={<FormattedMessage id="jobs.ainkaa" defaultMessage="Desarrollador de Front-end & Project Manager" />}
            company="Ainkaa"
            period={<FormattedMessage id="jobs.ainkaa-dates" defaultMessage="Marzo 2021 - Actualidad" />}
            duty1={<FormattedMessage id="jobs.ainkaa-duty1" defaultMessage="Programa de creación de start-ups dirigido a jóvenes para crear una app móvil viable donde se realizó:" />}
            duty2={<FormattedMessage id="jobs.ainkaa-duty2" defaultMessage="Programación en HTML, CSS, Javascript y React. Diseño UX UI. Diseño de prototipos con Figma." />}
            duty3={<FormattedMessage id="jobs.ainkaa-duty3" defaultMessage="Creación de planes de empresa, de negocio y viabilidad. Realización de plan de marketing e investigación de mercados." />}
            duty4={<FormattedMessage id="jobs.ainkaa-duty4" defaultMessage="Elevator pitch y presentación de PMV para la búsqueda de financiación." />}
            />
            ) : (
              null
              )}

        {adiplus ? (
          <FichaTrabajo
          id="adiplus-description"
          
          role={<FormattedMessage id="jobs.adiplus" defaultMessage="Periodista" />}
          href="https://www.linkedin.com/company/adiplus-techandcontent/"
          company="Adiplus Tech & Content"
          period={<FormattedMessage id="jobs.adiplus-dates" defaultMessage="Octubre 2019 - Junio 2020" />}
          duty1={<FormattedMessage id="jobs.adiplus-duty1" defaultMessage="Redacción y edición de noticias y contenidos para el portal del sector gastronómico Pan&Pizza." />}
          duty2={<FormattedMessage id="jobs.adiplus-duty2" defaultMessage="Redacción de artículos para la revista Newspa, el magazine del Gremio de Panaderos de la Provincia de Barcelona." />}
          duty3={<FormattedMessage id="jobs.adiplus-duty3" defaultMessage="Redacción de noticias y artículos sobre seguros en Tiempo Seguro." />}
          duty4={<FormattedMessage id="jobs.adiplus-duty4" defaultMessage="Diseño e implementación de estrategias de Posicionamiento SEO y campañas de email marketing." />}
          />
          ) : (
            null
            )}

        {diariAra ? (
          <FichaTrabajo
          id="diariara-description"
          role={<FormattedMessage id="jobs.ara" defaultMessage="Periodista" />}
          href="https://www.ara.cat/"
          company="Diari Ara"
          period={<FormattedMessage id="jobs.ara-dates" defaultMessage="Septiembre 2018 - Mayo 2019" />}
          duty1={<FormattedMessage id="jobs.ara-duty1" defaultMessage="Redactor en prácticas de noticias, reportajes, entrevistas y otros contenidos en la sección de cultura sobre temas de música, literatura, cine, teatro y artes visuales." />}
          duty2={<FormattedMessage id="jobs.ara-duty2" defaultMessage="Cobertura de la actualidad diaria." />}
          duty3={<FormattedMessage id="jobs.ara-duty3" defaultMessage="Asistencia a ruedas de prensa." />}
          duty4={<FormattedMessage id="jobs.ara-duty4" defaultMessage="Colaboración puntual con otras secciones." />}
          />
          ) : (
            null
            )}

        
      </div>
    </>
  );
}

