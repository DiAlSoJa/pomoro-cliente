import { useContext } from "react";
import { SettingContext } from "../context/SettingsContext";

const ButtonControl = () => {
    const {handleReset,handleStart,handleStop} = useContext(SettingContext);
    return ( 
        <div className="btns">
            <button onClick={handleStart} className="btn" >Start</button>
            <button onClick={handleStop} className="btn">Stop</button>
            <button onClick={handleReset} className="btn">Reset</button>
        </div>
     );
}
 
export default ButtonControl;