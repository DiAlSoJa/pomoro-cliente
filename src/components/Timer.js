import React, { useEffect, useContext, useState } from "react";
import { SettingContext } from "../context/SettingsContext";

const Timer = () => {
  const {isRunning,seconds,setSeconds,setIsRunning,handleChangeMode,minutes,setMinutes} = useContext(SettingContext);

  useEffect(() => {
    let interval = null;
  
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setIsRunning(false);
          }
        }
      }, 1000);
    }
    document.title = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (minutes === 0 && seconds === 0) {
      handleChangeMode();
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, minutes, seconds]);



  return (
    <div className="timer-container">
      <div class="timer last">

        <div class="outer">
            <div class="inner">
                <span>{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}</span>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
            <defs>
               <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
               </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" stroke-linecap="round" strokeDashoffset={0}/>
        </svg>

      </div>
    </div>
  );
};

export default Timer;