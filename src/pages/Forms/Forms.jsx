import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user';

const LandingPage = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [registrationForm, setRegistrationForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const {setId} = useContext(UserContext);
  
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleRegistrationChange = (e) => {
    const { email, value } = e.target;
    setRegistrationForm((prevForm) => ({
      ...prevForm,
      [email]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/user/auth",{
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        'Content-Type': 'application/json', // Encabezado para indicar que se espera una respuesta en formato JSON
      
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.token){
        localStorage.setItem("x-token",data.token)
        setId(data.user._id)
      }else{
        setLoginForm({email:"",password:""})
      }
    })
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:8080/user/crus",{
      method: "POST",
      body: JSON.stringify(registrationForm),
      headers: {
        'Content-Type': 'application/json', // Encabezado para indicar que se espera una respuesta en formato JSON
      
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  };

  // useEffect(()=>{
  //   const token = localStorage.getItem("x-token");
  //   if(token){
  //       fetch("http://localhost:8080/user/gtme",{
  //           headers:{
  //               "Content-Type": "application/json",
  //               "x-token": token
  //           }
  //       })
  //       .then(res=>res.json())
  //       .then(data=>{
  //           if(data._id){
  //               setIsAuthenticated(true);
  //               setLoading(false);
  //           }
  //           else {
  //               setIsAuthenticated(false);
  //               localStorage.removeItem("x-token");
  //               setLoading(false);

  //           }
  //       })
  //   }else{
  //       setIsAuthenticated(false);
  //       setLoading(false);
  //   }
  // },[actualizar]);

  return (
    <div className="landing-page">

      <div className="forms">
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={loginForm.password}
              onChange={handleLoginChange}
            />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>


        <div className="registration-form">
          <h2>Registrarse</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Nombre completo"
              value={registrationForm.username}
              onChange={handleRegistrationChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={registrationForm.email}
              onChange={handleRegistrationChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={registrationForm.password}
              onChange={handleRegistrationChange}
            />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default LandingPage;