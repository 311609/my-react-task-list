import React from 'react';

const Tareas = () => {
  const tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3']; // Ejemplo de lista de tareas

  return (
    <div>
      <h1>Listado de Tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
