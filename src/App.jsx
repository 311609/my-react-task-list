import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import adaSchoolLogo from './imagenes/logo-Ada.png';
import TaskList from './Components/TaskList';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Menu from './Components/Menu';
import Header from './Components/Header';
import HeaderPage from './Components/HeaderPage';
import './App.css';

function App() {
  const [modoOscuro, setModoOscuro] = React.useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(prevModo => !prevModo);
  };

  return (
    <div className="container">
      <BrowserRouter>
        <div className="encabezado">
          <div className="aplicacion-tareas">
            <HeaderPage />
          </div>
          <div className="adaschool-logo-contenedor">
            <img src={adaSchoolLogo} className="adaschool-logo" alt="Ada School Logo" />
          </div>
          <Header modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />
          <div className="tareas-lista-principal">
            <Menu />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/tareas" element={<TaskList />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
