import React from "react";
import { useState } from "react";
import Tarea from "./Tarea";
import '../carpeta-estilos/ListaDeTareas.css';

function ListaDeTareas() {

    const [tareas, seTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            seTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        seTareas(tareasActualizadas);
    }

    const complearTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        seTareas(tareasActualizadas);
    }
    return (
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tarea-lista-contenedor">
            {
                tareas.map((tarea) => 
                <Tarea
                key={tarea.id}
                id={tarea.id}
                 texto={tarea.texto}
                 completada={tarea.completada}
                 completarTarea={completarTarea}
                 eliminarTarea={eliminarTarea} />
              )
          }
        </div>
        </>
    );

} 

export default ListaDeTareas;