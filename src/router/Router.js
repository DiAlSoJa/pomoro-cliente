import { Route,Routes,Navigate } from "react-router-dom";
import LandingPage from '../pages/LandingPage/LandingPage';
import DashBoard from '../pages/DashBoard/DashBoard';
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Forms from "../pages/Forms/Forms";
import InsideFolder from '../components/InsideFolder/InsideFolder';
import NotFound from '../pages/NotFound/NotFound';

const Router = ({url}) => {
    return ( 
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>


          <Route path='/forms' element={<Forms url={url}></Forms>}></Route>

          <Route element={<PrivateRoute url={url}/>}>
            <Route path='/dashboard' element={<DashBoard/>}>
              <Route path='folder/:id' element={<InsideFolder/>}></Route>
            </Route>
          </Route>

          <Route path='/NotFound' element={<NotFound/>}></Route>
          <Route path='*' element={<Navigate to="/NotFound"></Navigate>}></Route>
        </Routes>
     );
}
 
export default Router;