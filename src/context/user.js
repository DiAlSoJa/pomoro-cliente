import { createContext ,useState} from "react";

export const UserContext = createContext();

const UserProvider =(props)=>{
    const [id,setId] = useState("");

    const values={
        id,setId
    }
    return(
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;