
import { Outlet } from "react-router-dom";
import Folders from "../../components/Folders/Folders";

const DashBoard = () => {

    return ( 
        <>
            <Folders></Folders>
            <Outlet/>
        </>

     );
}
 
export default DashBoard;