
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import adaSchoolLogo from './imagenes/logo-Ada.png';
import TaskList from './Components/TaskList';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Menu from './Components/Menu';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="aplicacion-tareas">
          <div className="adaschool-logo-contenedor">
            <img src={adaSchoolLogo} className="adaschool-logo" alt="Ada School Logo" />
          </div>
          <Header />
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
