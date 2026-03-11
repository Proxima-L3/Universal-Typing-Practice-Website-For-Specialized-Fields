import { useState, useEffect, useReducer } from 'react';

import '../App.css'


function Timer({startTimer, onTimerExpire, setTimeElapsed}) {
    // below variable is the length of time the user wants the typing practice session to last.. hardcoded for now: 1 minute or 60,000 ms
    // we can put timerLength & timeRemaining state in parent component
    const timerLength = 8;
    
    const [timeRemaining, setTimeRemaining] = useState(timerLength);

    useEffect( () => {
        const intervalId = setInterval( () => {
            // console.log(startTimer)
            // console.log(counter)
            if (startTimer && timeRemaining >= 0) {
                if (0 < timeRemaining && timeRemaining <= timerLength) {
                    setTimeRemaining(timeRemaining - 1);
                    // console.log('timer updated')
                    // console.log(timeRemaining)
                    // console.log(timeElapsed)
                    setTimeElapsed(timerLength - timeRemaining);
                }
                else if (timeRemaining === 0) {
                    console.log('Test concluded')
                    console.log(timeRemaining)
                    onTimerExpire()
                }
                else {
                    console.log('something went wrong: in Timer')
                }
            }

        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeRemaining, startTimer]);
    

    // let startTimer = function() {
    //     // not useable until state management code of Timer & TypingPracticeField is written in App
    // }

    // let timeElapsed = function() {
    //     return timerLength - timeRemaining;
    // }

    let pauseTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    let resetTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    const displayTimer = function() {
        let mins = Math.floor(timeRemaining / 60);
        let secs = timeRemaining % 60;

        return `${mins}:${String(secs).padStart(2,'0')}`;
    }

    return (
    <>
      {/* {console.log('timer component mounted')} */}
      <div className={`timer ${ startTimer && timeRemaining <= 3 ? 'testEnding' : '' }`} tabIndex='1'>{displayTimer()}</div>
    </>
  )
}


export default Timer;