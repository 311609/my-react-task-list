import React, { useState, useEffect } from "react";
import Task from './Task.jsx';
import '../carpeta-estilos/TaskList.css';
import TaskForm from "./TaskForm.jsx";
import { useTareas } from "../hooks.js";

function TaskList()  {
  const { tareas, setTareas} = useTareas();

  
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
  };

  const editarTarea = id => {
    setTareas(tareas.map(tarea => tarea.id === id ? {...tarea, isEditing: !tarea.isEditing } : tarea));
  };

  const actualizarTarea = (id, nuevoTexto) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.texto = nuevoTexto;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TaskForm onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {tareas.map(tarea =>
          <Task
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            actualizarTarea={actualizarTarea}
          />
        )}
      </div>
    </>
  );
}

export default TaskList;
