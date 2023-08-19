import React, { useState } from 'react';


const IconWithOptions = () => {
    const [showOptions, setShowOptions] = useState(false);
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
    const handleEdit = () => {
      // Lógica para manejar la edición aquí
      console.log('Editar');
    };
  
    const handleDelete = () => {
      // Lógica para manejar la eliminación aquí
      console.log('Eliminar');
    };
  
    return (
      <div className="icon-container">
        <i className="fa-solid fa-gear" onClick={toggleOptions}></i>
        {showOptions && (
          <div className="options">
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Eliminar</button>
          </div>
        )}
      </div>
    );
  };

export default IconWithOptions;