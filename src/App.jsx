import './App.css';
import adaSchoolLogo from  './imagenes/logo-Ada.png';
import TaskList from './Components/TaskList';
import Header from './Components/Header'

function App() {
    return (
        <div className='aplicacion-tareas'>
          <div className='adaschool-logo-contenedor'>  
            <img
            src={adaSchoolLogo}
            className='adaschool-logo' />
        </div>
        <div className='tareas-lista-principal'>
            <h1>To Do List</h1>
            <Header />
            <TaskList />
        </div>
      </div>     
    );
}

export default App;