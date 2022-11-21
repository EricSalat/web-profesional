import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";


function App() {
  return (
    <div className="App">
    <Header />
      <main>
      <section>
        <p className="mini-heading">Hola, me llamo</p>
        <h1 className="big-heading">Èric Salat</h1>
        <h2 className="big-heading">Y programo aplicaciones web.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, cum nihil odio ab modi asperiores itaque libero. Repellendus voluptatibus placeat dolore dicta eum suscipit reiciendis cumque? Ipsa possimus quod temporibus!</p>
        <Button
        texto="Haz clic para conocerme"
        className="know-me-button"
         />
      </section>
        
      </main>
    </div>
  );
}

export default App;
