import logo from './assets/logos/favicon.png';
import './App.css';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import NumberedHeading from './components/Numbered-Heading/Numbered-Heading';
import FotoEric from "./assets/eric_salat.jpg";
import Project from "./components/Project/Project";
import Trabajos from './components/Trabajos/Trabajos';
import LeftAside from './components/Asides/LeftAside';
import RightAside from './components/Asides/RightAside';
// import { Header, Button, NumberedHeading, TabButton, FichaTrabajo, Project } from "@components";


function App() {

  return (
    <div className="App">
         <LeftAside />
         <RightAside />
         <Header />
      <main>
        <section id="hero">
          <p className="mini-heading">Hola, me llamo</p>
          <h1 className="big-heading">Èric Salat.</h1>
          <h2 className="big-heading">Y programo aplicaciones web.</h2>
          <p>Soy Front-end Developer con experiencia en marketing digital y me dedico a crear aplicaciones desde el principio hasta el final: empezando por la concepción de la idea de negocio, pasando por el desarrollo, hasta llegar a la monetización.</p>
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
              <p>Estas son las tecnologías con las que he estado trabajando:</p>
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

          <Trabajos />

        </section>
        <section id="works">
          <NumberedHeading texto="Cosas que he programado" />
          <div  className="projects-section">
            <Project
              title="Calculadora"
              description="Una calculadora para el móvil que permite sumar, restar, multiplicar y dividir. Hecha con JavaScript y React."
              tech="JavaScript"
              tech2="React"
              weblink="http://ericsalat.com/calculadora/"
              githublink="https://github.com/EricSalat/calculadora"
            />
            <Project
              title="Lista de tareas"
              description="Una app para apuntar y gestionar tus tareas: anota, tacha y elimina lo que hayas completado. Hecha con JavaScript y React."
              tech="JavaScript"
              tech2="React"
              weblink="http://ericsalat.com/tareas/"
              githublink="https://github.com/EricSalat/aplicacion-tareas"
            />
            <Project
              title="Reserva entradas de cine"
              description="Una app para comprar entradas de cine. Selecciona la película, los asientos y la cantidad de tickets. Hay descuentos entre semana."
              tech="React"
              githublink="https://github.com/EricSalat/Selector-Asientos"
            />
          </div>

        </section>
        <section id="next">
          <p>04. ¿Ahora qué?</p>
          <p>Sigamos en contacto</p>
          <p>Actualmente estoy buscando nuevas oportunidades laborales. Si tienes alguna propuesta o consulta, no dudes en contactarme. Te responderé lo más rápido posible!</p>
          <Button 
            className="know-me-button" 
            texto="Contacto" href="mailto:ericsalatb@gmail.com" />
        </section>
        
      </main>
      <footer className="developed-by">
        <p>Desarrollado con ❤️ por <a href="https://www.linkedin.com/in/eric-salat/" target="_blank">Èric Salat</a></p>
      </footer>
    </div>
  );
}

export default App;
