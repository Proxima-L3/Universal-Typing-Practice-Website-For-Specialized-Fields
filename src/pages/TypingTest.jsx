import { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import WordCounter from '../components/typing-test/word-count-based/WordCounter.jsx';
import Timer from '../components/typing-test/timed/Timer.jsx';
import RestartTestButton from '../components/typing-test/RestartTestButton.jsx';
import TypingPracticeField from '../components/typing-test/TypingPracticeField.jsx';
import UserTypingStats from '../components/typing-test/UserTypingStats.jsx';
import SeeResultsButton from '../components/typing-test/SeeResultsButton.jsx';
import * as CONSTANTS from '/src/utils/constants.jsx';

// This component will manage the shared states of all the other timed typing test components and display them
function TypingTest({typingTestChoice}) {

    // 3 states for: whether user has started typing & whether timer has expired or word count is reached
    // const [startTimer, setStartTimer] = useState(false);
    const [testStarted, setTestStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const [wordCountReached, setWordCountReached] = useState(false); // use for word count based test

    // 4 states for: calculating the user's typing stats (ie for now wpm typing speed and typing accuracy)
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [wordsTyped, setWordsTyped] = useState(0);
    const [charTypedCorrectly, setCharTypedCorrectly] = useState(0);
    const [totalCharTyped, setTotalCharTyped] = useState(0);

    const [testRestarted, setTestRestarted] = useState(false);





    const [searchParams, setSearchParams] = useSearchParams();





    // url param values of custom tests' options user chose ...(ISSUE I REALIZED WITH THIS.. IN ORDER FOR THE PROCESS CUSTOM TEST OPTIONS FUNCTION TO WORK PROPERLY I NEED TO BE ABLE TO CHANGE THEIR STATE IN THE FUNCTION.. IE THEIR DATATYPE AND/OR VALUE.. JUST USE THE URLSEARCHPARAMS OBJECT TO RETRIEVE AND CHANGE VALUES INSTEAD.)
    // const [searchParams] = useSearchParams();
    // const location = useLocation();

    // const testType = searchParams.get('testType');
    // const testTypeSubOption = searchParams.get('testTypeSubOption');
    // const timeLimit = searchParams.get('timeLimit');
    // const autoGenModifiers = searchParams.get('autoGenModifiers');
    // const insertionPointStyle = searchParams.get('insertionPointType');
    // const showInsertionPoint = searchParams.get('showInsertionPoint');
    // const showStats = searchParams.get('showStats');
    // const showTimer = searchParams.get('showTimer');
    // const showWordCounter = searchParams.get('showWordCounter');

    // const userCustomTextInput = location.state?.customTextInput;


    // const modifiers = location.state?.selectedModifiers;
    // const insertionStyle = location.state?.insertionPointStyle;



    // page session location object that will be used to call each search param in process options function
    const locationObject = useLocation();

    // state vars that will hold converted url param values of custom tests' options user chose
    const [testType, setTestType] = useState('');
    const [testTypeSubOption, setTestTypeSubOption] = useState('');
    const [timeLimit, setTimeLimit] = useState(60);
    const [autoGenModifiers, setAutoGenModifiers] = useState({});
    const [insertionPointStyle, setInsertionPointStyle] = useState('');
    const [showInsertionPoint, setShowInsertionPoint] = useState(true);
    const [showStats, setShowStats] = useState(true);
    const [showTimer, setShowTimer] = useState(true);
    const [showWordCounter, setShowWordCounter] = useState(true);
    const [userCustomTextInput, setUserCustomTextInput] = useState('');

    const [wordCount, setWordCount] = useState(100);
    const [processedTextString, setProcessedTextString] = useState('');


    useEffect(() => {
        processCustomTestUserOptions();
    }, []);


    // updates all custom test user options state variables from url params to their desired data type and values
    const processCustomTestUserOptions = function () {

        // testType: selectedTest,
        // testTypeSubOption: selectedTestTypeOption,
        // timeLimit: customTime,
        // autoGenModifiers: JSON.stringify(selectedModifiers),
        // insertionPointType: selectedInsertionPoint,
        // showInsertionPoint: isChecked,
        // showStats: selectedOptionShowStats,
        // showTimer: selectedOptionShowTimer,
        // showWordCounter: selectedOptionShowWordCounter,
        // customText: JSON.stringify(customTextInput),
        // selectedFieldThemeFileName: selectedSpecializedFieldTheme
        

        const params = new URLSearchParams(locationObject.search)
        let wordCountNum = 2000
        let customTestWordCountNum = 0
        let textModifiers = JSON.parse(params.get('autoGenModifiers'))
        // console.log(textModifiers)
        let customText = locationObject.state?.customTextInput
        // let fieldTextString = ''

        if (params.has('testType')) {
            setTestType(params.get('testType'));
            // console.log('from url', params.get('testType'))
            // console.log('from state', testType)
            setTestTypeSubOption(params.get('testTypeSubOption'));
            // console.log('from url', params.get('testTypeSubOption'))
            // console.log('from state', testTypeSubOption)
            // setTimeLimit(timeLimitInSecs);
            // setTimeLimit((Number(timeLimitString.slice(0, 2)) / 60) + Number(timeLimitString.slice(-2)));
            setAutoGenModifiers(textModifiers);

            // updates custom text input state variable to text value stored in session page location object state property
            setUserCustomTextInput(customText);


        // only update these state variables if it is a custom test
            setInsertionPointStyle(params.get('insertionPointType'));
            setShowInsertionPoint(params.get('showInsertionPoint'));
            setShowStats(params.get('showStats') === 'Show' ? true : false);
            setShowTimer(params.get('showTimer') === 'Show' ? true : false);
            setShowWordCounter(params.get('showWordCounter') === 'Show' ? true : false);




            // convert predefined time limit selection from string to actual num value
            if (['30 secs', '1 min', '2 mins', '3 mins', '5 mins'].includes(params.get('testTypeSubOption'))) {
                let timeLimitChoiceString = params.get('testTypeSubOption');

                if (timeLimitChoiceString.slice(-4) === 'mins') {
                    let mins = Number(timeLimitChoiceString[0]);
                    let secs = 0;
                    let timeLimitInSecs = (mins * 60) + secs;
                    setTimeLimit(timeLimitInSecs);
                }
                else if (timeLimitChoiceString.slice(-4) === 'secs') {
                    let timeLimitInSecs = Number(timeLimitChoiceString.slice(0, 2))
                    setTimeLimit(timeLimitInSecs);
                }
            }
            // convert time limit string to num value in seconds for timer component
            else if (params.get('testTypeSubOption') === 'Custom Time') {
                let timeLimitString = params.get('timeLimit');
                let mins = Number(timeLimitString.slice(0, 2));
                let secs = Number(timeLimitString.slice(-2));
                let timeLimitInSecs = (mins * 60) + secs;
                setTimeLimit(timeLimitInSecs);
            }


            // convert predefined word count selection from string to actual num value
            if (['100 Words', '500 Words', '1000 Words', '2000 Words'].includes(params.get('testTypeSubOption'))) {
                let wordCountChoiceString = params.get('testTypeSubOption').slice(0, 4)
                // console.log(wordCountChoiceString[3], ':')
                
                if (wordCountChoiceString[3] === ' ') {
                    wordCountNum = Number(wordCountChoiceString.slice(0, 3))
                    setWordCount(wordCountNum)
                }
                else if (wordCountChoiceString[3] === '0') {
                    wordCountNum = Number(wordCountChoiceString)
                    setWordCount(wordCountNum)
                }
            }
            // calculate number of words in custom text
            else if (params.get('testTypeSubOption') === 'Custom Text') {
                customTextWordCountNum = CONSTANTS.calcWordCount(customText)
                setWordCount(customTextWordCountNum)
            }


            // insert fetch statement to get requested text file and convert to string, then process text to apply modifiers and slice text to word count choice
            fetch(`${import.meta.env.BASE_URL}/specialized-field-test-texts/${params.get('selectedFieldThemeFileName')}.txt`)
                .then(response => response.text())
                .then(text => {
                    setProcessedTextString(CONSTANTS.processSpecializedFieldText(params.get('testType'), wordCountNum, text, textModifiers))
                })
        }


        else if (params.has('testChoice')) {
            setTestType(params.get('testChoice'));
            setTimeLimit(params.get('testTime'));
            setWordCount(params.get('testWords'));
            setInsertionPointStyle('Underscore');
            setShowInsertionPoint(true);
            textModifiers = {'Capital Letters': true, 'Punctuation': true, 'Numbers': true, 'Symbols': true}
            setAutoGenModifiers(textModifiers)

            fetch(`${import.meta.env.BASE_URL}/specialized-field-test-texts/generic.txt`)
                .then(response => response.text())
                .then(text => {
                    setProcessedTextString(CONSTANTS.processSpecializedFieldText(params.get('testChoice'), Number(params.get('testWords')), text, textModifiers))
                })
        }


    }


    const displayTestChoiceWidgetsUpperRow = function() {

        if (searchParams.has('testChoice')) {

            if (searchParams.get('testChoice') === 'timed') {
                return (
                    <Timer testStarted={testStarted} setTimerExpired={setTimerExpired} testRestarted={testRestarted} setTestRestarted={setTestRestarted} testType={testType} timerLength={searchParams.get('testTime')} wordCountReached={wordCountReached} showTimer={showTimer} />
                )
            }
            else if (searchParams.get('testChoice') === 'word-count') {
                return (
                    <WordCounter wordCountReached={wordCountReached} setWordCountReached={setWordCountReached} timerExpired={timerExpired} wordsTyped={wordsTyped} testRestarted={testRestarted} setTestRestarted={setTestRestarted} testType={testType} wordCount={searchParams.get('testWords')} showWordCounter={showWordCounter} />
                )
            }
        
        }
        else if (searchParams.has('testType')) {

            if (testType === 'Timer Based') {
                return (
                    <>
                        <WordCounter wordCountReached={wordCountReached} setWordCountReached={setWordCountReached} timerExpired={timerExpired} wordsTyped={wordsTyped} testRestarted={testRestarted} setTestRestarted={setTestRestarted} testType={testType} wordCount={wordCount} showWordCounter={showWordCounter} />

                        <Timer testStarted={testStarted} setTimerExpired={setTimerExpired} testRestarted={testRestarted} setTestRestarted={setTestRestarted} testType={testType} timerLength={timeLimit} wordCountReached={wordCountReached} showTimer={showTimer} />
                    </>
                )
            }
            else if (testType === 'Word-Count Based') {
                return (
                    <>
                        <Timer testStarted={testStarted} setTimerExpired={setTimerExpired} testRestarted={testRestarted} setTestRestarted={setTestRestarted} testType={testType} timerLength={timeLimit} wordCountReached={wordCountReached} showTimer={showTimer} />

                        <WordCounter wordCountReached={wordCountReached} setWordCountReached={setWordCountReached} timerExpired={timerExpired} wordsTyped={wordsTyped} testRestarted={testRestarted} setTestRestarted={setTestRestarted} testType={testType} wordCount={wordCount} showWordCounter={showWordCounter} />
                    </>
                )
            }
        
        }

    }


    return (
        <>

            <div className='upperWidgetsRow'>
                {/* a function that checks which typing test option the user chose on BasicTypingTestsPage screen and/or widgets if custom test and displays the relevant components/widgets */}
                {displayTestChoiceWidgetsUpperRow()}

                {/* RestartTestButton's props are all the output functions: all the output functions which are used in the component to reset all states to their starting values when the button is clicked */}
                <RestartTestButton setTestStarted={setTestStarted} setTimerExpired={setTimerExpired} setWordCountReached={setWordCountReached} setTimeElapsed={setTimeElapsed} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} setTestRestarted={setTestRestarted} />
            </div>
            {/* TypingPracticeField's props are 1 output function: on user's first input set testStarted to true & 2 input states: timerExpired and wordCountReached bools to prevent user input if the timer has expired or word count has been reached depending on which test user chose && 4 more output functions: one to set wordCountReached bool to true if user has reached end of word-count based test, one to set the number of words the user has typed, one to set number of characters typed correctly, and one to set the total number of characters typed state variables && 1 input state and 1 output function: testRestarted bool used to reset all of the components state variables */}
            <TypingPracticeField setTestStarted={setTestStarted} timerExpired={timerExpired} wordCountReached={wordCountReached} setWordCountReached={setWordCountReached} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} testRestarted={testRestarted} setTestRestarted={setTestRestarted} showInsertionPoint={showInsertionPoint} insertionPointStyle={insertionPointStyle} processedTextString={processedTextString} />
            <div className='lowerWidgetsRow'>
                {/* UserTypingStats' props are 5 input states: testStarted and timeElapsed and wordsTyped used to determine the user's avg wpm and charTypedCorrectly and totalCharTyped to determine the user's accuracy percentage && 1 output function: setTimeElapsed used to update timeElapsed && 2 input states: timerExpired and wordCountReached bools used to determine when to resize component depending on which test is chosen */}
                <UserTypingStats testStarted={testStarted} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed} wordsTyped={wordsTyped} charTypedCorrectly={charTypedCorrectly} totalCharTyped={totalCharTyped} timerExpired={timerExpired} wordCountReached={wordCountReached} showStats={showStats} />

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

