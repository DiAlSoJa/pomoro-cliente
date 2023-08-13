import React, { createContext, useState } from 'react';

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {  
    const [pomodoro, setPomodoro] = useState(1);
    const [short, setShort] = useState(1);
    const [long, setLong] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [mode,setMode] = useState("pomodoro");
    const [minutes,setMinutes] = useState(pomodoro);
    const [veces,setVeces]= useState(1);
    const [index,setIndex]=useState(0);

    const handleStart = () => {
        setIsRunning(true);
      };
    
    const handleStop = () => {
        setIsRunning(false);
      };
    
    const handleReset = () => {
        setPomodoro(20);
        setShort(5);
        setLong(15);
        setSeconds(0);
        setIsRunning(false);
      };
    const handleChangeMode=()=>{

      if(mode==="pomodoro"&& index<veces){
        setMode("short");
        setMinutes(short);
        setIndex(prev=> prev+1);
        document.body.classList.remove("pomodoro");
        document.body.classList.remove("long");
        document.body.classList.add("short");
      }else if(mode==="pomodoro"&& index>=veces){
        setIndex(0);
        setMode("long");
        setMinutes(long);
        document.body.classList.remove("pomodoro");
        document.body.classList.remove("short");
        document.body.classList.add("long");
      }else{
        setMode("pomodoro");
        setMinutes(pomodoro);
        document.body.classList.remove("short");
        document.body.classList.remove("long");
        document.body.classList.add("pomodoro");
      }
      console.log(mode);
    }
    const value1 ={
        handleReset,
        handleStart,
        handleStop,
        pomodoro,
        seconds,
        isRunning,
        setPomodoro,
        setSeconds,
        setIsRunning,
        short,
        long,
        setLong,
        setShort,
        mode,
        handleChangeMode,
        minutes,
        setMinutes
    }
    return ( 
        <SettingContext.Provider value={value1}>
            {props.children}
        </SettingContext.Provider>
     );
}
 
export default SettingsContextProvider;