import React, { useState } from "react";
import '../carpeta-estilos/TaskForm.css';

function TaskForm({ manejarEnvio }) {
  const [texto, setTexto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (texto.trim().length < 3) {
      alert("La tarea debe tener al menos 3 caracteres");
      return;
    }

    manejarEnvio({ texto, descripcion });
    setTexto("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit} className="tarea-formulario">
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Añadir tarea"
        className="tarea-input"
      />
      <input
        type="text"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        placeholder="Descripción de la tarea"
        className="tarea-input"
      />
      <button type="submit" className="tarea-boton">
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
