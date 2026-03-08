import { useState, useEffect, useReducer } from 'react';

import '../App.css'


function Timer() {
    // below variable is the length of time the user wants the typing practice session to last.. hardcoded for now: 1 minute or 60,000 ms
    const timerLength = 60;
    
    const [counter, setCounter] = useState(60);
    // try using useReducer.. or maybe not?
    // const [counter, incrementCounter] = useReducer((i) => i + 1, 0);
    const [remainingTime, setRemainingTime] = useState(timerLength);
    // const [currentTime, setCurrentTime]

    useEffect( () => {
        const intervalId = setInterval( () => {
            // parameter 1.. a function
            // pretty sure all of this code is completely unnecessary except the setCounter line
            // if (0 < remainingTime && remainingTime <= timerLength) {
            if (0 < counter && counter <= timerLength) {
                setCounter(counter - 1);
                // incrementCounter();
                // setRemainingTime(remainingTime - 1000)
                console.log('timer updated')
                console.log(counter)
            }
            // else if (remainingTime == 0) {
            else if (counter == 0) {
                console.log('Test concluded')
            }
            else {
                console.log('something went wrong: in Timer')
            }

        }, 1000);
        return () => clearInterval(intervalId);
    }, [counter]);
    

    let startTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }
    
    let getTimeRemaining = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    let pauseTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    let resetTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    // let displayTimer = null

    return (
    <>
      {/* <p className='typingPracField'  tabIndex='1' onKeyDown={onType} ref={autoFocusElement}>{displayTextArray}</p> */}
      {/* {console.log('timer component mounted')} */}
      <div className='timer' tabIndex='1'>{counter}</div>
    </>
  )
}


export default Timer;