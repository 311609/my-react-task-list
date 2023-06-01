import React from 'react';
import { useState } from 'react';
import '../carpeta-estilos/TaskForm.css';
import {  v4 as uuidv4 } from 'uuid';



function TaskForm(props) {

  const [input, setInput] = useState('');



  const manejarCambio = e => {
    setInput(e.target.value);
   
    };


  const manejarEnvio = e =>  {
    e.preventDefault();  
   const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
  
  

    props.onSubmit(tareaNueva);
    setInput('');

        

 
  }
  return (
    <form
    className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <input
      className='tarea-input'
      type='text'
      placeholder='Ingresar tarea'
      name='texto'
      value={input}
      onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar
      </button>
    </form>
  );

  }

  
export default TaskForm;
