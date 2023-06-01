import './App.css';
import Header from './Components/Header';
import adaSchoolLogo from  './imagenes/logo-Ada.png';
import TaskList from './Components/TaskList.jsx';

function App() {
    return (
        <div className='aplicacion-tareas'>
          <div className='adaschool-logo-contenedor'>  
            <img
            src={adaSchoolLogo}
            className='adaschool-logo' />
        </div>
        <div className='tareas-lista-principal'>
            <Header />
            <TaskList />
        </div>
      </div>     
    );
}

export default App;