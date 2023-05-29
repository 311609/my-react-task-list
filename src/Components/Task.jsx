import React from "react";
import '../carpeta-estilos/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'

function Task({id, texto, completada, completarTarea, editarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
            <div
             onClick={() => completarTarea(id) }>
            {texto}
            </div>
            <div
             className='tarea-contenedor-iconos'
             onClick={() => eliminarTarea(id) }>
                <AiOutlineCloseCircle className='tarea-icono' />           
                        
                <AiFillEdit className="tarea-icono" onClick={() => editarTarea(texto)} />
             </div> 
          </div>
    
       
    
    );
}

export default Task;