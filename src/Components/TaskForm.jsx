import React, { useState } from 'react';
import '../carpeta-estilos/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {
  const [input, setInput] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarCambioDescripcion = e => {
    setDescripcion(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();

    if (input.length < 3 && descripcion.length > 0) {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      descripcion: descripcion,
      completada: false
    }
    props.onSubmit(tareaNueva);
    
    setInput('');
    setDescripcion('');
  }

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Ingresar tarea'
        name='texto'
        value={input} 
        onChange={manejarCambio}
      />
      <input
        className='tarea-input'
        type='text'
        placeholder='Ingresar descripción'
        name='descripcion'
        value={descripcion} 
        onChange={manejarCambioDescripcion}
      />
      <button className='tarea-boton'>
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
