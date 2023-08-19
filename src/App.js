import React, {useEffect, useContext} from 'react';
import NotFound from './pages/NotFound/NotFound';
import {Navigate, Route,Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import DashBoard from './pages/DashBoard/DashBoard';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Forms from "./pages/Forms/Forms";

import './App.css';
import { UserContext } from './context/user';
import InsideFolder from './components/InsideFolder/InsideFolder';

function App() {
  const {setId}=useContext(UserContext);

  useEffect(()=>{
    const token = localStorage.getItem('x-token');
    if (token) {
      // Hacer la petición fetch con el token
      fetch("http://localhost:8080/user/gtme", {
        headers: {
          "Content-Type": "application/json",
          "x-token": token
        }
      })
      .then(response => response.json())
      .then(data => {
        // Si la respuesta contiene el token, guardarlo en setId
        if (data._id) {
          setId(data._id);
        }else {
          setId("");
          localStorage.removeItem("x-token");
      }
      })
      .catch(error => {
        console.error("Error en la petición:", error);
      });
    }
  },[setId])
  
  return (
    <div className="container">
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>


          <Route path='/forms' element={<Forms></Forms>}></Route>

          <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<DashBoard/>}>
              <Route path='folder/:id' element={<InsideFolder/>}></Route>
            </Route>
          </Route>

          <Route path='/NotFound' element={<NotFound/>}></Route>
          <Route path='*' element={<Navigate to="/NotFound"></Navigate>}></Route>
        </Routes>
    </div>
  );
}

export default App;
