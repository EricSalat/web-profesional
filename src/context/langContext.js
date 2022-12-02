import * as React from "react";
import { useState }  from "react";
import MensajesIngles from  "../languages/en-GB.json"
import MensajesEspañol from "../languages/es-ES.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

function LangProvider({children}) {
  const [mensajes, setMensajes] = useState({MensajesEspañol}); //mensajes en el idioma
  const [locale, setLocale] = useState("es-ES"); //idioma por defecto

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        setMensajes(MensajesEspañol);
        setLocale("es-ES");
        break;
      case "en-GB":
        setMensajes(MensajesIngles);
        setLocale("en-GB");
        break;
      default:
        setMensajes(MensajesEspañol);
        setLocale("es-ES");
    }
  }

  return(
    <langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );

}

export {LangProvider, langContext};