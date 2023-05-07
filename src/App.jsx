import './App.css';
import adaScholLogo from  './imagenes/logo-Ada.png';
import ListaDeTareas from './Components/ListaDeTareas';

function App() {
    return (
        <div className='aplicacion-tareas'>
          <div className='adaschool-logo-contenedor'>  
            <img
            src={adaScholLogo}
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