import React, { useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  useEffect(() => {
    // Cambiar el título de la pestaña cuando la aplicación se monta
    document.title = 'Matias Donati';

    // Asegurarse de restaurar el título original al desmontar la aplicación
    return () => {
      document.title = 'Matias Donati';
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute al montar y desmontar la aplicación

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
