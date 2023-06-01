import React, { useState } from "react";
import "../carpeta-estilos/Task.css";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, texto, completada, completarTarea, eliminarTarea, editarTarea, actualizarTarea }) {
  const [nuevoTexto, setNuevoTexto] = useState(texto);
  const [editando, setEditando] = useState(false);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleGuardar = () => {
    actualizarTarea(id, nuevoTexto);
    setEditando(false);
  };

  const handleCancelar = () => {
    setNuevoTexto(texto);
    setEditando(false);
  };

  const handleChangeTexto = (event) => {
    setNuevoTexto(event.target.value);
  };

  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      {editando ? (
        <div className="tarea-editor-container">
          <input type="text" value={nuevoTexto} onChange={handleChangeTexto} className="tarea-editor" />
          <div className="tarea-iconos">
            <AiFillEdit className="tarea-icono tarea-icono-editar" onClick={handleGuardar} />
            <AiOutlineCloseCircle className="tarea-icono tarea-icono-borrar" onClick={handleCancelar} />
          </div>
        </div>
      ) : (
        <div onClick={() => completarTarea(id)} className="tarea-texto">
          {texto}
        </div>
      )}
      {!editando && (
        <div className="tarea-iconos">
          <AiFillEdit className="tarea-icono tarea-icono-editar" onClick={handleEditar} />
          <AiOutlineCloseCircle className="tarea-icono tarea-icono-borrar" onClick={() => eliminarTarea(id)} />
        </div>
      )}
    </div>
  );
}

export default Task;
