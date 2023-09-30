import React, {useEffect, useContext} from 'react';
import { UserContext } from './context/user';
import Router from './router/Router';
import Header from "./components/Header/Header";
import './App.css';

function App() {
  // const {setId}=useContext(UserContext);
  const url ="http://localhost:8080/";
  // useEffect(()=>{
  //   const token = localStorage.getItem('x-token');
  //   if (token) {
  //     // Hacer la petición fetch con el token
  //     fetch(url+"user/gtme", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-token": token
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Si la respuesta contiene el token, guardarlo en setId
  //       if (data._id) {
  //         setId(data._id);
  //       }else {
  //         setId("");
  //         localStorage.removeItem("x-token");
  //     }
  //     })
  //     .catch(error => {
  //       console.error("Error en la petición:", error);
  //     });
  //   }
  // },[setId])
  
  return (
    <>  
        <Header/>
        <div className='container'>

          

          <Router url={url}/>
        </div>
        
    </>
  );
}

export default App;
