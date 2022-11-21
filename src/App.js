import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import NumberedHeading from './components/Numbered-Heading/Numbered-Heading';
import FotoEric from "./assets/eric_salat.jpg";
import TabButton from './components/TabButton/TabButton';
import FichaTrabajo from './components/FichaTrabajo/FichaTrabajo';


function App() {
  return (
    <div className="App">
    <Header />
      <main>
      <section>
        <p className="mini-heading">Hola, me llamo</p>
        <h1 className="big-heading">Èric Salat.</h1>
        <h2 className="big-heading">Y programo aplicaciones web.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, cum nihil odio ab modi asperiores itaque libero. Repellendus voluptatibus placeat dolore dicta eum suscipit reiciendis cumque? Ipsa possimus quod temporibus!</p>
        <Button
        texto="Haz clic para conocerme"
        className="know-me-button"
        href="#about"
         />
      </section>
      <section id="about">
        <NumberedHeading texto="Sobre mi"/>
        <div className="about-me">
          <div className="about-me-text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque quia unde, dicta nisi rerum! Quisquam rem et aliquid nam accusamus dolores. Nulla rerum dolorum voluptas sunt est magni nostrum!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque quia unde, dicta nisi rerum! Quisquam rem et aliquid nam accusamus dolores. Nulla rerum dolorum voluptas sunt est magni nostrum!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque quia unde, dicta nisi rerum! Quisquam rem et aliquid nam accusamus dolores. Nulla rerum dolorum voluptas sunt est magni nostrum!</p>
            <div>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>SASS</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={FotoEric} height="300" width="300"></img>
          </div>
        </div>
      </section>
      <section id="experience">
        <NumberedHeading texto="Donde he trabajado"/>
          <div className="jobs">
            <div>
              <TabButton text="Arian International" class="tab-button tab-button-active"/>
              <TabButton text="Polièdric" class="tab-button" />
              <TabButton text="Ainkaa" class="tab-button" />
              <TabButton text="Adiplus Tech & Content" class="tab-button" />
            </div>
            <FichaTrabajo
              id="1"
              role="Desarrollador de front-end"
              period="Julio - Octubre 2022"
              company="Arian International Projects"
              href="https://arianinternational.eu/"
              duty1="Desarrollo de la web con HTML, CSS y JavaScript."
              duty2="Adaptación de la web corporativa con diseño responsive a diferentes dispositivos"
              duty3="Mejora del tiempo de carga, la usabilidad y la experiencia de usuario"
              duty4="Incorporación de herramientas de medición para campañas de marketing digital."
             />
             
            {/* <FichaTrabajo
              id="2"
              role="Gestor de campañas SEM & PPC"
              company="Polièdric"
              href="https://arianinternational.eu/"
              period="Junio 2021 - Marzo 2022"
              duty1="Gestión de campañas publicitarias de pago por clic. Elaboración de la estrategia, diseño implementación, medición y análisis de la performance de los anuncios en Google Ads, Facebook Ads, Amazon Ads y Linkedin Ads."
              duty2="Adaptación de diseño responsive a distintos dispositivos. Mejora del tiempo de carga, la usabilidad, la experiencia de usuario (UX & UI) y el posicionamiento web (SEO)."
              duty3="Incorporación de herramientas de medición (Google Analytics, Tag Manager, Data Studio) para campañas de marketing."
              duty4="Automatización de procesos de trabajo."
             />
            <FichaTrabajo
              id="3"
              role="Desarrollador de front-end & Gestor"
              company="Ainkaa"
              href="https://arianinternational.eu/"
              period="Marzo 2021 - Actualidad"
              duty1="Programa de creación de start-ups dirigido a jóvenes para crear una app móvil viable donde se realizó"
              duty2="Programación en HTML, CSS, Javascript y React."
              duty3="Diseño UX UI. Diseño de prototipos con Figma."
              duty4="Creación de planes de empresa, de negocio y viabilidad"
              duty5="Realización de plan de marketing e investigación de mercados"
              duty6="Elevator pitch y presentación de PMV para la búsqueda de financiación."
             />
            <FichaTrabajo
              id="4"
              role="Periodista"
              href="https://arianinternational.eu/"
              company="Adiplus Tech & Content"
              period="Octubre 2019 - Junio 2020"
              duty1="Redacción y edición de noticias y contenidos para el portal del sector gastronómico Pan&Pizza."
              duty2="Redacción de artículos para la revista Newspa."
              duty3="Redacció de noticias y artículos sobre seguros en Tiempo Seguro."
              duty4="Posicionamiento SEO."
              duty5="Elaboración de newsletters."
             /> */}
             
          </div>

      </section>
        
      </main>
    </div>
  );
}

export default App;
