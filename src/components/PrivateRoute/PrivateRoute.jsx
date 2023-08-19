import { useEffect ,useState} from "react";
import { Outlet,Navigate} from "react-router-dom";

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [verificar,setVerificar] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem("x-token");
        if(token){
            fetch("http://localhost:8080/user/gtme",{
                headers:{
                    "Content-Type": "application/json",
                    "x-token": token
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data._id){
                    setIsAuthenticated(true);
                    setVerificar(true);
                }
                else {
                    setIsAuthenticated(false);
                    localStorage.removeItem("x-token");
                    setVerificar(true);

                }
            })
            .catch(err=>console.log(err))
        }else{
            setIsAuthenticated(false);
            setVerificar(true);
        }
    },[]);

    
    if(verificar){
        if (isAuthenticated) {
          return <Outlet></Outlet>;
        } else {
            return <Navigate to="/forms" />;
          
        }

    }
};
 
export default PrivateRoute;