import React from 'react';
import {  useRef } from 'react';
import { useReducer } from 'react';
import './App.css';



const ListaTareas =() => {

  const inputRef = useRef();
  
  const [tasks, dispatch] = useReducer((state = [], action) => {

    switch (action.type) {
      case 'add_task': {
        return [
        ...state,
        {id: state.length, title: action.title }
        ]
      }
      case 'remove_task': {
        return state.filter((_tasks, index) => index != action.index);

      }

      default: {
        return state;
      }
    }
  });

   const handleSubmit =(event) =>{
    event.preventDefault();
    dispatch({
      type: 'add_task',
      title: inputRef.current.value
    });
   }

  return (
   <div>
    <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>TAREA</label>
        <input type= "text" name="title" ref={inputRef} />
        <input type="submit" value="Enviar" />
</form>


      < div className='tasks'>
        {tasks && tasks.map((task, index) => (
          <div div className='task' key={index}>
            <p>{task.title}</p>
            <button onClick={() => dispatch({type: 'remove_task', index})}>
              BORRAR</button>
       </div>
        ))
      
        }
     </div>
    </div>
  
  )
   
  
      }

export default ListaTareas;
