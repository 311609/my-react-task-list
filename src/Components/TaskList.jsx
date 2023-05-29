import React from "react";
import { useState } from "react";
import Task from "./Task";
import '../carpeta-estilos/TaskList.css';
import TaskForm from "./TaskForm";

function TaskList()  {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
        
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    function editarTarea(_e) {
        setTareas(tareas.map(tarea => tarea.id == id ?
            { ...tarea, isEditing: !tarea.isEditing } : tarea));
    }

    

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);

        localStorage.setTareas('tarea', tareasActualizadas);
    };

    return (
        <>
        <TaskForm onSubmit={agregarTarea} />
        <div className="tarea-lista-contenedor">
            {
                tareas.map((tarea) => 
                <Task
                key={tarea.id}
                id={tarea.id}
                 texto={tarea.texto}
                 completada={tarea.completada}
                 completarTarea={completarTarea}
                 eliminarTarea={eliminarTarea}
                 editarTarea={editarTarea} />
              )
          }
        </div>
        </>
    );

} 

export default TaskList;