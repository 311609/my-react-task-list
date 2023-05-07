import React from "react";
import '../carpeta-estilos/Tareas.css';
import { BsFillClipboard2XFill } from 'react-icons/ai';


function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
        <div className={cpmpletada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
            <div
            onClick={() => completarTarea(id) }>
            {texto}
            </div>
            <div
             className='tarea-contenedor-iconos'
             onClick={() => eliminarTarea(id) }>
                <BsFillClipboard2XFill className='tarea-icono' />
        </div>
      </div>
    );
}

export default Tarea;