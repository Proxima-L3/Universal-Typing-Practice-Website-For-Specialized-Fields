// import { useState, useEffect } from 'react';

import { MdOutlineRestartAlt } from "react-icons/md";

import '../../App.css';


function RestartTestButton({setStartTimer, setTimerExpired,setTimeElapsed, setWordsTyped, setCharTypedCorrectly, setTotalCharTyped, setTestRestarted}) {


    const resetTest = function() {
        setStartTimer(false);
        setTimerExpired(false);
        setTimeElapsed(0);
        setWordsTyped(0);
        setCharTypedCorrectly(0);
        setTotalCharTyped(0);
        setTestRestarted(true);
    }

    return (
        <>
            <button className='restartTestButton' onClick={resetTest}><MdOutlineRestartAlt /></button>
        </>
    )
}

export default RestartTestButton;