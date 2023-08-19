import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const InsideFolder = () => {
    const [cartas,setCartas] = useState([]);
    const {id} = useParams();
    const [redirect,setRedirect] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("x-token");

        fetch("http://localhost:8080/carta/gtcafo/"+id,{
            headers:{
                "x-token": token
            }
        })
        .then(res=> res.json())
        .then(data => {
            if(data.errors) setRedirect(true);
            else if(data.length>0) setCartas(data);
        })
        .catch(err=> console.log(err))
    },[id])

    if(redirect) return(<Navigate to="NotFound"/>);
    
    return ( 
        <div className="cartas">
            {cartas.length===0?
            <h2>No hay cartas en este mazo todavia</h2>
            :
            cartas.map((carta)=>{
                return(<p key={carta._id}>carta.front</p>)
            })
            }
        </div>
     );
}
 
export default InsideFolder;