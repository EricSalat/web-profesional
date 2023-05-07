import './App.css';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import NumberedHeading from './components/Numbered-Heading/Numbered-Heading';
import FotoEric from "./assets/eric_salat.jpg";
import Project from "./components/Project/Project";
import Trabajos from './components/Trabajos/Trabajos';
import LeftAside from './components/Asides/LeftAside';
import RightAside from './components/Asides/RightAside';
import MenuMobile from './components/Header/MenuMobile';
import Footer from "./components/Footer/Footer";


function App() {
  

  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (
    
      <div className="App">
        <LeftAside />
        <RightAside />
        { menuCollapse ? (
          <MenuMobile onClick={menuIconClick} />
          ) : (
          null
          )}
        <Header onclick={menuIconClick} />
        <main>
          <section id="hero">
            <p className="mini-heading animate__animated animate__fadeIn animate__delay-1s">
              <FormattedMessage id="app.welcome" 
              defaultMessage="Hola, me llamo" 

              />
            </p>
            <h1 className="big-heading animate__animated animate__fadeIn animate__delay-1s">Èric Salat.</h1>
            <h2 className="big-heading animate__animated animate__fadeIn animate__delay-1s"> <FormattedMessage id="app.subtitle" defaultMessage="Y programo aplicaciones web." />
            </h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
            <FormattedMessage id="app.introduction" defaultMessage="Soy Front-end Developer con experiencia en marketing digital y me dedico a crear aplicaciones desde el principio hasta el final: empezando por la concepción de la idea de negocio, pasando por el desarrollo, hasta llegar a la monetización." />
            </p>
            <Button
              // texto="Haz clic para conocerme"
              texto={<FormattedMessage id="app.button" defaultMessage="Haz clic para conocerme"/>} 
              className="know-me-button animate__animated animate__fadeInUp animate__delay-1s"
              href="#about"
            />
          </section>
          <section id="about">
            <NumberedHeading texto={<FormattedMessage id="about.title" defaultMessage="Sobre mi"/>} />
            <div className="about-me">
              <div className="about-me-text">
                <p><FormattedMessage id="about.description-1" defaultMessage="Hola! Me llamo Èric, vivo en Barcelona y me encanta crear cosas que vivan en Internet. Todo empezó en el año 2020 cuando me uní a un programa para que jóvenes aprendieran a crear aplicaciones móviles y emprendieran sus startups tecnológicas. Allí me metí de lleno a aprender desarrollo web."/></p>
                <p><FormattedMessage id="about.description-2" defaultMessage="En la universidad estudié comunicación y marketing, que combinados con mis conocimientos en programación, me permiten ser un perfil híbrido con una visión transversal de los proyectos. Por ello, enfoco el Front-end no solo al desarrollo, sino en la mejora de embudos de tráfico y la conversión de leads y ventas."/></p>
                <p><FormattedMessage id="about.description-3" defaultMessage="Estas son las tecnologías con las que he estado trabajando:"/></p>
                <div>
                  <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Google Ads</li>
                    <li>Google Analytics</li>
                    <li>Amazon Ads</li>
                  </ul>
                </div>
              </div>
              <div>
                <img src={FotoEric} height="300" width="300" alt="Retrato de Èric Salat" title="Retrato de Èric Salat"></img>
              </div>
            </div>
          </section>
          <section id="experience">
            <Trabajos />
          </section>
          <section id="works">
            <NumberedHeading texto={<FormattedMessage id="works.title" defaultMessage="Cosas que he programado"/>} />
            <div className="projects-section">
              <Project
                title={<FormattedMessage id="works.professional-website" defaultMessage="Crypto stocks"/>}
                description={<FormattedMessage id="works.professional-website-description" defaultMessage="Pantalla principal de una app de inversiones de criptomonedas. Ve el balance de tus stocks."/>}
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                weblink="https://www.ericsalat.com/kelisto/"
                githublink="https://github.com/EricSalat/kelisto-ejercicio-tecnico"
              />
              <Project
                title={<FormattedMessage id="works.professional-website" defaultMessage="Web profesional"/>}
                description={<FormattedMessage id="works.professional-website-description" defaultMessage="Revisa el código de este mismo sitio, mi web profesional, hecha con HTML, CSS, JavaScript y React."/>}
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                githublink="https://github.com/EricSalat/web-profesional"
              />
              <Project
                title={<FormattedMessage id="works.arian-website" defaultMessage="Web Arian International"/>}
                description={<FormattedMessage id="works.arian-website-description" defaultMessage="Rediseño de UX/UI de la web corporativa. Implementación de diseño responsive y mejora del rendimiento."/>}
                tech="HTML"
                tech2="CSS"
                tech3="Wordpress"
                weblink="https://arianinternational.eu/"
                githublink="https://arianinternational.eu/"
              />
              <Project
                title={<FormattedMessage id="works.calculator" defaultMessage="Calculadora"/>}
                description={<FormattedMessage id="works.calculator-description" defaultMessage="Una calculadora para el móvil que permite sumar, restar, multiplicar y dividir. Hecha con JavaScript y React."/>}
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                weblink="http://ericsalat.com/calculadora/"
                githublink="https://github.com/EricSalat/calculadora"
              />
              <Project
                title={<FormattedMessage id="works.cinema" defaultMessage="Reserva entradas de cine"/>}
                description={<FormattedMessage id="works.cinema-description" defaultMessage="Una app para comprar entradas de cine. Selecciona la película, los asientos y la cantidad de tickets. Hay descuentos entre semana."/>}
                tech="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="React"
                githublink="https://github.com/EricSalat/Selector-Asientos"
              />
            </div>
          </section>
          <section id="next">
            <p><FormattedMessage id="next.title" defaultMessage="04. ¿Ahora qué?"/></p>
            <p><FormattedMessage id="next.subtitle" defaultMessage="Sigamos en contacto"/></p>
            <p><FormattedMessage id="next.description" defaultMessage="Si tienes alguna propuesta o consulta, no dudes en contactarme. ¡Te responderé lo más rápido posible!"/></p>
            <Button
              className="know-me-button"
              texto={<FormattedMessage id="next.button" defaultMessage="Contacto"/>} href="mailto:ericsalatb@gmail.com" />
          </section>
        </main>
        <Footer />
      </div>
  );
}

export default App;
