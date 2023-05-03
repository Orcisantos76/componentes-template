import React from "react";
import "./App.css";
import Garagem from "./Componentes/Garagem.js"
import Header from "./Componentes/Header.js";
import logo from "./img/logo.png"
import Footer from "./Componentes/Footer";

export default function App() {
  

  return (
    <div>
      <div className="cabecalho">
        <img src={logo} className="logo"/>
        <Header/>
      </div>

      <div className="App">
        <h1>Aula - Componentes React</h1>
        <Garagem/>
      </div>

      <div className="rodape">
        <Footer/>
      </div>
    </div>
    
  );
}
