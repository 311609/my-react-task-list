import React, { useEffect, useState } from "react";
import Task from './Task.jsx';
import '../carpeta-estilos/TaskList.css';
import TaskForm from "./TaskForm.jsx";
import { useTareas } from "../hooks.js";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@chakra-ui/react";

function TaskList() {
  const { tareas, setTareas } = useTareas();
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem('tareas'));
    if (storedTareas) {
      setTareas(storedTareas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const nuevaTarea = {
        id: uuidv4(),
        texto: tarea.texto,
        descripcion: tarea.descripcion,
        completada: false
      };
      const tareasActualizadas = [nuevaTarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const editarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => tarea.id === id ? { ...tarea, isEditing: !tarea.isEditing } : tarea);
    setTareas(tareasActualizadas);
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

  const toggleModoOscuro = () => {
    setModoOscuro(prevModo => !prevModo);
  };

  return (
    <div>
      <TaskForm manejarEnvio={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {tareas.map(tarea => (
          <Task
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            descripcion={tarea.descripcion}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            actualizarTarea={actualizarTarea}
          />
        ))}
    </div>
     </div>
  );
        }

        export default TaskList;