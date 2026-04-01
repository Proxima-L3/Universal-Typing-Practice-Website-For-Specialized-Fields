import {useState} from 'react';

import Timer from './typing-test/timed/Timer.jsx';
import RestartTestButton from './typing-test/RestartTestButton.jsx';
import TypingPracticeField from './typing-test/TypingPracticeField.jsx';
import UserTypingStats from './typing-test/UserTypingStats.jsx';
import SeeResultsButton from './typing-test/SeeResultsButton.jsx';

// This component will manage the shared states of all the other timed typing test components and display them
function TypingTest() {

    // 3 states for: whether user has started typing & whether timer has expired or word count is reached
    // const [startTimer, setStartTimer] = useState(false);
    const [testStarted, setTestStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const [wordCountReached, setWordCountReached] = useState(false); // use for word count based test

    // 4 states for: calculating the user's typing stats (ie for now wpm typing speed and typing accuracy)
    const [timeElapsed, setTimeElapsed] = useState(0);    // this state can be removed? after another timer is created in usertypingstats since calculating timeElapsed from timer will cause problems if word count based test is chosen.. nah its still needed in parent component for reset test button
    const [wordsTyped, setWordsTyped] = useState(0);
    const [charTypedCorrectly, setCharTypedCorrectly] = useState(0);
    const [totalCharTyped, setTotalCharTyped] = useState(0);

    const [testRestarted, setTestRestarted] = useState(false);
    
    return (
        <>

            <div className='testTimerRow'>

        {/* insert word count component that displays how many words are left in the test.. (equivalent of timer component) */}

                {/* Timer's props are 1 input state: testStarted bool to determine when to start countdown & 1 output function: when countdown reaches 0 timerExpired bool is set to true && 1 input state: testRestarted bool used to reset all of the components state variables */}
                <Timer testStarted={testStarted} setTimerExpired={setTimerExpired} testRestarted={testRestarted} setTestRestarted={setTestRestarted} />
                {/* RestartTestButton's props are all the output functions: all the output functions which are used in the component to reset all states to their starting values when the button is clicked */}
                <RestartTestButton setTestStarted={setTestStarted} setTimerExpired={setTimerExpired} setWordCountReached={setWordCountReached} setTimeElapsed={setTimeElapsed} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} setTestRestarted={setTestRestarted} />
            </div>
            {/* TypingPracticeField's props are 1 output function: on user's first input set testStarted to true & 2 input states: timerExpired and wordCountReached bools to prevent user input if the timer has expired or word count has been reached depending on which test user chose && 3 more output functions: one to set the number of words the user has typed, one to set number of characters typed correctly, and one to set the total number of characters typed state variables && 1 input state: testRestarted bool used to reset all of the components state variables */}
            <TypingPracticeField setTestStarted={setTestStarted} timerExpired={timerExpired} wordCountReached={wordCountReached} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} testRestarted={testRestarted} setTestRestarted={setTestRestarted} />
            <div className='resultsRow'>
                {/* UserTypingStats' props are 5 input states: testStarted and timeElapsed and wordsTyped used to determine the user's avg wpm and charTypedCorrectly and totalCharTyped to determine the user's accuracy percentage && 1 output function: setTimeElapsed used to update timeElapsed && 2 input states: timerExpired and wordCountReached bools used to determine when to resize component depending on which test is chosen */}
                <UserTypingStats testStarted={testStarted} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed} wordsTyped={wordsTyped} charTypedCorrectly={charTypedCorrectly} totalCharTyped={totalCharTyped} timerExpired={timerExpired} wordCountReached={wordCountReached} />

                {/* {console.log(`timeElapsed: ${timeElapsed}    wordsTyped: ${wordsTyped}    charTypedCorrectly: ${charTypedCorrectly}    totalCharTyped: ${totalCharTyped}`)} */}

                {/* SeeResultsButton's props are 2 input states: timerExpired and wordCountReached bools used to determine when the SeeResultsButton component should appear */}
                <SeeResultsButton timerExpired={timerExpired} wordCountReached={wordCountReached} />
            </div>
        </>
    )
}

export default TypingTest;










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

