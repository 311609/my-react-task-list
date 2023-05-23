import React from "react";
import '../carpeta-estilos/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'


function Task({id, texto, completada, completarTarea, eliminarTarea }) {
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
        </div>
      </div>
    );
}

export default Task;