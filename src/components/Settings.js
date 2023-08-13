import React, { useContext } from 'react';
import { SettingContext } from '../context/SettingsContext';

const Settings = () => {
    const {pomodoro,setPomodoro,short,setShort,long,setLong}=useContext(SettingContext);
    return ( 
        <div className='settings'>
            <div className='time'>
                <div className='settings-title'>
                    <h3>Time</h3>
                </div>
                <div className='input-flex'>
                    <div className='time-input-wrapper'>
                        <span>Pomodoro</span>
                        <input
                        type="number"
                        min="0"
                        value={pomodoro}
                        onChange={(e) => setPomodoro(parseInt(e.target.value))}
                        />
                    </div>
                    <div className='time-input-wrapper'>
                        <span>Short break</span>
                        <input
                        type="number"
                        min="0"
                        value={short}
                        onChange={(e) => setShort(parseInt(e.target.value))}
                        />
                    </div>
                    <div className='time-input-wrapper'>
                        <span>Long break</span>
                        <input
                        type="number"
                        min="0"
                        value={long}
                        onChange={(e) => setLong(parseInt(e.target.value))}
                        />
                    </div>

                </div>


            </div>

            
        </div>
     );
}
 
export default Settings;