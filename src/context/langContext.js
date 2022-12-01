import * as React from "react";
import {useState}  from "react";
import MensajesIngles from './../en-GB.json';
import MensajesEspañol from './../es-ES.json';

const langContext = React.createContext();

function LangProvider({children}) {
  const [mensajes, setMensajes] = useState({MensajesEspañol}); //mensajes en el idioma
  const [locale, setLocale] = useState("es-ES"); //idioma por defecto

  const establecerLenguaje = (lenguaje) => {
    console.log("Cambiamos el lenguaje a ", lenguaje)
  }

  return(
    <langContext.Provider value={{hola: "HOla soy Èric"}}>
      {children}
    </langContext.Provider>
  );

}

export {LangProvider, langContext};