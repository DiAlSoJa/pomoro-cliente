import React, {useEffect, useState } from 'react';
import IconWithOptions from "../IconWithOptions/IconWithOptions";

const Folders = () => {
    const [folders,setFolders] = useState([]);
    const [crearFolder,setCrearFolder] = useState(false);
    const [inputFolder,setInputFolder] = useState("newFile");
    const [acutalizar,setActualizar] = useState(false);
   
    useEffect(()=>{
        const token = localStorage.getItem("x-token");

        fetch("http://localhost:8080/folder/gtfo", {
            headers: {
              "Content-Type": "application/json",
              "x-token": token
            }
          })
          .then(response => response.json())
          .then(data => {
            // Si la respuesta contiene el token, guardarlo en setId
            setFolders(data.folders)
          }
          )
          .catch(error => {
            console.error("Error en la petición:", error);
          });

    },[acutalizar])

    const inputFolderOnChange=(e)=> setInputFolder(e.target.value);


    const createFolder=()=>{
      const token = localStorage.getItem("x-token");
      const data = {name:inputFolder}

      fetch("http://localhost:8080/folder/crfo", {
        body:JSON.stringify(data),
        method:"POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": token
        }
      })
      .then(response => response.json())
      .then(data => {
        setCrearFolder(false);
        console.log(data);
        setActualizar(prev=>!prev);
      }
      )
      .catch(error => {
        console.error("Error en la petición:", error);
      });
    }


    return ( 
        <div className="folders">
            <div className='folder-header' >
                <div>mazos</div>
                <div><button onClick={()=>setCrearFolder(true)}>+</button></div>
            </div>
            {(crearFolder)
            ?
            <>
                <input type='text' value={inputFolder} onChange={inputFolderOnChange}/>
                <i className="fa-solid fa-check" onClick={createFolder}></i>
                <i className="fa-solid fa-x" onClick={()=>{setCrearFolder(false);setInputFolder("")}}></i>
            </>:""}
            {folders.map((folder)=>{
                return(<div key={folder._id}>
                        {}
                        <a href={"/dashboard/folder/"+folder._id}>
                          <i className="fa-solid fa-folder"></i>
                          <p>{folder.name}</p>
                        </a>
                        <IconWithOptions/>
                    </div>)
            })}
        </div>
     );
}
 
export default Folders;