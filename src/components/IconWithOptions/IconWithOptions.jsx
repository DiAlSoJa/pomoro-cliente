import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


const IconWithOptions = ({id,name,setActualizar}) => {
    const [showOptions, setShowOptions] = useState(false);
    const [editar,setEditar] = useState(false);
    const [inputEditar,setInputEditar] = useState(name);
    const [navegar,setNavegar] = useState(false)
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
    const handleEdit = () => {
      // Lógica para manejar la edición aquí
      setEditar(true);
    };
  
    const handleDelete = () => {
      const token = localStorage.getItem("x-token");

      fetch("http://localhost:8080/folder/defo/"+id,{
        method:"DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-token": token
        }
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        setNavegar(true);
      });
    };
    
    const editarFile=()=>{
      const token = localStorage.getItem("x-token");

      fetch("http://localhost:8080/folder/pufo/"+id,{
        method:"PUT",
        body: JSON.stringify({name:inputEditar}),
        headers: {
          "Content-Type": "application/json",
          "x-token": token
        }
      })
      .then(res=>res.json())
      .then(data => {
        if(data._id){
          setEditar(false);
          setShowOptions(false);
          setActualizar(pre=>!pre)
        }
      })
    }

    const inputOnchange=(e)=> setInputEditar(e.target.value);
    
    if(navegar) return <Navigate to="/dashboard"/>

    return (
      <div className="icon-container">
        {!editar?
        <>
          <a href={"/dashboard/folder/"+id}>
            <i className="fa-solid fa-folder"></i>
            <p>{name}</p>
          </a>

          <i className="fa-solid fa-gear" onClick={toggleOptions}></i>
          {showOptions && (
            <div className="options">
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleDelete}>Eliminar</button>
            </div>
          )}
        </>
        :
        <>
          <input type='text' value={inputEditar} onChange={inputOnchange}/>
          <i className="fa-solid fa-check" onClick={editarFile}></i>
          <i className="fa-solid fa-x" onClick={()=>{setEditar(false);setShowOptions(false)}}></i>
        </>
        }
      </div>
    );
  };

export default IconWithOptions;