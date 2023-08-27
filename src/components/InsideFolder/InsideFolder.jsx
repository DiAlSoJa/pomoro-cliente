import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const InsideFolder = () => {
    const [cartas,setCartas] = useState([]);
    const {id} = useParams();
    const [redirect,setRedirect] = useState(false);
    const [crearCarta,setCrearCarta] = useState(false);
    const [front,setFront] = useState("front");
    const [back,setBack] = useState("back");
    const [actualizar,setActualizar] = useState(false);

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
    },[id,actualizar])

    const frontOnChange=(e)=>setFront(e.target.value);
    const backOnChange=(e)=>setBack(e.target.value);

    const createCarta=()=>{
        const token = localStorage.getItem("x-token");
        fetch("http://localhost:8080/carta/crca/"+id,{
            method:"POST",
            body: JSON.stringify({front,back}),
            headers:{
                "Content-Type": "application/json",
                "x-token": token
            }
        })
        .then(res=>res.json())
        .then(data=> {
            if(data._id){
                setCrearCarta(false);
                setActualizar(pre=>!pre);
            }
            else{
                console.log(data);
            }
        })
        .catch(err=>console.log(err))
    }
    if(redirect) return(<Navigate to="NotFound"/>);
    
    return ( 
        <div className="cartas">
             <div className='cartas-header' >
                <div>cartas</div>
                <div><button onClick={()=>setCrearCarta(true)}>+</button></div>
            </div>
            {(crearCarta)
            ?
            <>
                <input type='text' value={front} onChange={frontOnChange}/>
                <input type='text' value={back} onChange={backOnChange}/>
                <i className="fa-solid fa-check" onClick={createCarta}></i>
                <i className="fa-solid fa-x" onClick={()=>{setCrearCarta(false);setFront("front");setBack("back")}}></i>
            </>:""}
            {cartas.length===0?
            <h2>No hay cartas en este mazo todavia</h2>
            :
            cartas.map((carta)=>{
                return(<p key={carta._id}>{carta.front}</p>)
            })
            }
        </div>
     );
}
 
export default InsideFolder;