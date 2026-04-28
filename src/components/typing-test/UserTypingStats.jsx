import {useState, useEffect} from 'react';

import '../../App.css';


function UserTypingStats ({testStarted, timeElapsed, setTimeElapsed, wordsTyped, charTypedCorrectly, totalCharTyped, timerExpired, wordCountReached, showStats}) {
    // const [avgWpm, setAvgWpm] = useState(0);
    // const [accuracy, setAccuracy] = useState(0);
    // const [timeElapsed, setTimeElapsed] = useState(0);


    // timer used exclusively for determining typing speed
    useEffect( () => {
        const intervalId = setInterval( () => {
            // console.log(startTimer)
            // console.log(counter)
            if (testStarted && !timerExpired && !wordCountReached) {
                // console.log(timeElapsed)
                setTimeElapsed(timeElapsed + 1)
                // console.log(timeElapsed)
            }
            else {
                console.log('test not started or is ended.. wpm currently static')
            }

        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeElapsed, testStarted]);



    const calcAvgWpm = function() {
        if (timeElapsed === 0 || wordsTyped === 0) return 0;
        let minsElapsed = timeElapsed / 60
        // setAvgWpm(Math.floor(wordsTyped / minsElapsed));
        return Math.floor(wordsTyped / minsElapsed);
    }

    const calcAccuracy = function(){
        if (totalCharTyped === 0) return 0;
        return Math.floor(100 * (charTypedCorrectly / totalCharTyped));
        // setAccuracy(Math.floor(100 * (charTypedCorrectly / totalCharTyped)));
    }

    const displayStats = function() {
        // console.log('timeElapsed: ' + timeElapsed + '    wordsTyped: ' + wordsTyped + '    charTypedCorrectly: ' + charTypedCorrectly + '    totalCharTyped: ' + totalCharTyped)
        let avgWpmStat = <span className='avgWpmStat'>{calcAvgWpm()}</span>
        let accuracyStat = <span className='accuracyStat'>{calcAccuracy()}</span>

        return <>
            <div>Average WPM: {avgWpmStat}</div>
            <div>Accuracy: {accuracyStat}%</div>
        </>;
    }

    return (
        <>
            <div className={`typingStats ${ timerExpired || wordCountReached ? 'typingStatsTestEnded' : 'typingStatsTestRunning'} ${showStats ? '' : 'contentHidden'}`} tabIndex='3'>{displayStats()}</div>
        </>
    )
}

export default UserTypingStats;