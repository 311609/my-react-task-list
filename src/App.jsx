import './App.css';
import adaSchoolLogo from  './imagenes/logo-Ada.png';
import ListaDeTareas from './Components/ListaDeTareas.jsx';

function App() {
    return (
        <div className='aplicacion-tareas'>
          <div className='adaschool-logo-contenedor'>  
            <img
            src={adaSchoolLogo}
            className='adaschool-logo' />
        </div>
        <div className='tareas-lista-principal'>
            <h1>Lista Tareas</h1>
            <ListaDeTareas />
        </div>
      </div>     
    );
}

export default App;