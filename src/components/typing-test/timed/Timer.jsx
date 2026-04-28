import { useState, useEffect, useReducer } from 'react';

import { useSearchParams } from 'react-router-dom';

import '../../../App.css';


function Timer({testStarted, setTimerExpired, testRestarted, setTestRestarted, testType, timerLength, wordCountReached, showTimer}) {
    // below variable is the length of time the user wants the typing practice session to last.. hardcoded for now: 1 minute or 60,000 ms
    // we can put timerLength & timeRemaining state in parent component
    // const timerLength = 60;


    const [searchParams, setSearchParams] = useSearchParams();
    
    const [timeRemaining, setTimeRemaining] = useState(timerLength);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect( () => {
        if (testRestarted) {
            setTimeRemaining(timerLength);
            setTimeElapsed(0);
            setTestRestarted(false);
        }
    }, [testRestarted]);

    useEffect( () => {
        const intervalId = setInterval( () => {
            // console.log(testStarted)
            // console.log(counter)
            if ((testType === 'Timer Based' || searchParams.get('testChoice') === 'timed') && testStarted && timeRemaining >= 0) {
                if (0 < timeRemaining && timeRemaining <= timerLength) {
                    setTimeRemaining(timeRemaining - 1);
                    // console.log('timer updated')
                    // console.log(timeRemaining)
                }
                else if (timeRemaining === 0) {
                    console.log('Test concluded')
                    console.log(timeRemaining)
                    setTimerExpired(true)
                }
                else {
                    console.log('something went wrong: in Timer')
                }
            }
            else if (testType === 'Word-Count Based' && testStarted) {
                if (!wordCountReached) {
                    setTimeElapsed(timeElapsed + 1);
                    // console.log('timer updated')
                    // console.log(timeRemaining)
                }
                // i dont know if this additional conditional is actually needed in the case of word count based test
                else if (wordCountReached) {
                    console.log('Test concluded')
                    console.log(timeElapsed)
                    setTimerExpired(true)
                }
                else {
                    console.log('something went wrong: in Timer')
                }
            }

        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeRemaining, timeElapsed, testStarted]);
    

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
        
        if (testType === 'Timer Based' || searchParams.get('testChoice') === 'timed') {
            let mins = Math.floor(timeRemaining / 60);
            let secs = timeRemaining % 60;
            return (
                <div className={`timer ${ testStarted && timeRemaining <= 3 ? 'testEnding' : '' } ${ showTimer ? '' : 'contentHidden' }`} tabIndex='1'>{`${mins}:${String(secs).padStart(2,'0')}`}</div>
            )
        }
        else if (testType === 'Word-Count Based') {
            let mins = Math.floor(timeElapsed / 60);
            let secs = timeElapsed % 60;
            return (
                <div className={`timer extraWidget ${ showTimer ? '' : 'contentHidden' }`} tabIndex='1'>{`${mins}:${String(secs).padStart(2,'0')}`}</div>
            )
        }
    }

    return (
        <>
            {displayTimer()}
        </>
    )
}


export default Timer;