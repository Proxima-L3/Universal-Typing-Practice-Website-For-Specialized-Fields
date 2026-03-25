import {useState} from 'react';

import Timer from './Timer.jsx';
import RestartTestButton from './RestartTestButton.jsx';
import TypingPracticeField from './TypingPracticeField.jsx';
import UserTypingStats from './UserTypingStats.jsx';
import SeeResultsButton from './SeeResultsButton.jsx';

// This component will manage the shared states of all the other timed typing test components and display them
function TimedTypingTest() {

    // 2 states for: whether user has started typing & whether timer has expired
    const [startTimer, setStartTimer] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // 4 states for: calculating the user's typing stats (ie for now wpm typing speed and typing accuracy)
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [wordsTyped, setWordsTyped] = useState(0);
    const [charTypedCorrectly, setCharTypedCorrectly] = useState(0);
    const [totalCharTyped, setTotalCharTyped] = useState(0);

    const [testRestarted, setTestRestarted] = useState(false);
    
    return (
        <>

            <div className='testTimerRow'>
                {/* Timer's props are 1 input state: startTimer bool to determine when to start countdown & 1 output function: when countdown reaches 0 function is called outside component to set timerExpired bool to true && 1 more output function: which updates the time elapsed state every second && 1 input state: testRestarted bool used to reset all of the components state variables */}
                <Timer startTimer={startTimer} onTimerExpire={() => setTimerExpired(true)} setTimeElapsed={setTimeElapsed} testRestarted={testRestarted} setTestRestarted={setTestRestarted} />
                {/* RestartTestButton's props are all the output functions: all the output functions which are used in the component to reset all states to their starting values when the button is clicked */}
                <RestartTestButton setStartTimer={setStartTimer} setTimerExpired={setTimerExpired} setTimeElapsed={setTimeElapsed} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} setTestRestarted={setTestRestarted} />
            </div>
            {/* TypingPracticeField's props are 1 output function: on user's first input set startTimer to true & 1 input: timerExpired bool to prevent user input if the timer has expired && 3 more output functions: one to set the number of words the user has typed, one to set number of characters typed correctly, and one to set the total number of characters typed state variables && 1 input state: testRestarted bool used to reset all of the components state variables */}
            <TypingPracticeField setStartTimer={setStartTimer} preventInput={timerExpired} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} testRestarted={testRestarted} setTestRestarted={setTestRestarted} />
            <div className='resultsRow'>
                {/* UserTypingStats' props are 4 input states: timeElapsed and wordsTyped used to determine the user's avg wpm and charTypedCorrectly and totalCharTyped to determine the user's accuracy percentage && 1 input state: timerExpired used to determine when to resize component */}
                <UserTypingStats timeElapsed={timeElapsed} wordsTyped={wordsTyped} charTypedCorrectly={charTypedCorrectly} totalCharTyped={totalCharTyped} timerExpired={timerExpired} />

                {/* {console.log(`timeElapsed: ${timeElapsed}    wordsTyped: ${wordsTyped}    charTypedCorrectly: ${charTypedCorrectly}    totalCharTyped: ${totalCharTyped}`)} */}

                {/* SeeResultsButton's props are 1 input state: timerExpired bool used to determine when the SeeResultsButton component should appear */}
                <SeeResultsButton timerExpired={timerExpired} />
            </div>
        </>
    )
}

export default TimedTypingTest;










// import { useState } from 'react'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   const [text, setText] = useState("cranky")
//   const [input, setInput] = useState("")
//   const onType = (_) => setInput(input + _.currentTarget.value)

//   const printChar = (i) => {
//     console.log(input)
//     console.log(input.length)
//     // if (i > input.length - 1) {
//     //   return <span>{text[i]}</span>
//     // }
//     if (text[i] == input[i]) {
//       return <span className="green">{text[i]}</span>
//     }
//     else {
//       return <span className="red">{text[i]}</span>
//     }
//   }

//   return (
//     <>

//       <div className="card">

//         <p>{text.split("").map((_,i) => printChar(i))}</p>
//         <input type="text" value={""} onInput={onType}/>
//         {/* {text.split("").map(l => <p>{l}</p>)} */}

//       </div>

//     </>
//   )
// }

// export default App

