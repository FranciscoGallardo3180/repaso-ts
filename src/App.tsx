import React from "react";
import Contador from "./components/Contador";
import ContadorConHook from "./components/ContadorConHook";
import { Fomrularios } from "./components/Fomrularios";
import Login from "./components/Login";
import Usuarios from "./components/Usuarios";
import Funciones from "./typescript/Funciones";
//import TiposBasicos from "./typescript/TiposBasicos";
import ObjetosLiterales from "./typescript/ObjetosLiterales";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS-Ract</h1>
 
      {/*<TiposBasicos></TiposBasicos>*/}
      {/*<ObjetosLiterales />*/}
      {/*<hr />*/}
      {/*<Funciones />*/}
      {/*<hr />*/}
      {/*<Contador/>*/}
      {/*<hr />*/}
      {/*<ContadorConHook/>*/}
      {/*<hr>/*/}
      {/*<Login/>*/}
      {/*<Usuarios/>*/}
      <hr />
      <Fomrularios/>
    </div>
  )
}


export default App