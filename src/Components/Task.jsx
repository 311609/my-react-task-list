import React from "react";
import '../carpeta-estilos/Task.css';
import { AiFillEdit, AiOutlineCloseCircle } from 'react-icons/ai'


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

                <AiFillEdit className="tarea-icono" onClick={() => editarTarea} />
        </div>
      </div>
    );
}

export default Task;