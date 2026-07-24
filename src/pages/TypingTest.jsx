import { useEffect, useState } from 'react';

import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

import WordCounter from '../components/typing-test/word-count-based/WordCounter.jsx';
import Timer from '../components/typing-test/timed/Timer.jsx';
import RestartTestButton from '../components/typing-test/RestartTestButton.jsx';
import TypingPracticeField from '../components/typing-test/TypingPracticeField.jsx';
import UserTypingStats from '../components/typing-test/UserTypingStats.jsx';
import SeeResultsButton from '../components/typing-test/SeeResultsButton.jsx';
import * as CONSTANTS from '/src/utils/constants.jsx';
import { frontendURL, backendURL, pathToTestResultsTable, pathToTextGenApi } from '/src/utils/constants.jsx';
import api from '/src/utils/api.js';

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
    const [specializationField, setSpecializationField] = useState('generic');
    const [insertionPointStyle, setInsertionPointStyle] = useState('');
    const [showInsertionPoint, setShowInsertionPoint] = useState(true);
    const [showStats, setShowStats] = useState(true);
    const [showTimer, setShowTimer] = useState(true);
    const [showWordCounter, setShowWordCounter] = useState(true);
    const [userCustomTextInput, setUserCustomTextInput] = useState('');

    const [wordCount, setWordCount] = useState(100);
    const [processedTextString, setProcessedTextString] = useState('');

    const [customTestBool, setCustomTestBool] = useState(false);
    const [basicTestOption, setBasicTestOption] = useState(null);
    const [customTimeBool, setCustomTimeBool] = useState(false);
    const [customTextBool, setCustomTextBool] = useState(false);
    const [testDateTimeTaken, setTestDateTimeTaken] = useState(new Date().toISOString());

    const [typingSpeedKPS, setTypingSpeedKPS] = useState(null);
    const [typingSpeedKPH, setTypingSpeedKPH] = useState(null);
    const [typingSpeedCPM, setTypingSpeedCPM] = useState(null);
    const [typingSpeedWPM, setTypingSpeedWPM] = useState(null);
    const [typingAccuracy, setTypingAccuracy] = useState(null);
    const [overallScore, setOverallScore] = useState(null);

    // use navigate hook used to save all the test data to be used in the next page TestResults which is navigated to
    const navigateTo = useNavigate();


    useEffect(() => {
        processCustomTestUserOptions();
    }, []);

    useEffect(() => {
        finalizeTypingStats();
    }, [timerExpired, wordCountReached])


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
        let customTextWordCountNum = 0
        let textModifiers = JSON.parse(params.get('autoGenModifiers'))
        // console.log(textModifiers)
        let customText = locationObject.state?.customTextInput
        // let fieldTextString = ''

        if (params.has('testType')) {
            setCustomTestBool(true);
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
            
            // only update this state variable only if custom text chosen
            if (params.get('testTypeSubOption') !== 'Custom Text') {
                setSpecializationField(params.get('selectedFieldThemeFileName'));
            }
            





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
                setCustomTimeBool(true);
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
                customTextWordCountNum = parseInt(CONSTANTS.calcWordCount(customText))
                setWordCount(customTextWordCountNum);
                setCustomTextBool(true);
                setProcessedTextString(customText);
            }


            // insert fetch statement to get requested text file and convert to string, then process text to apply modifiers and slice text to word count choice
            if (params.has('selectedFieldThemeFileName') && params.get('selectedFieldThemeFileName') !== '' && params.get('testTypeSubOption') !== 'Custom Text') {
                if (params.get('selectedFieldThemeFileName') in ['generic', 'accounting', 'architecture', 'auto mechanics', 'business law', 'carpentry', 'computer science', 'data entry', 'ems', 'event planning', 'executive assistance', 'financial analysis', 'graphic design', 'marketing', 'medical transcription', 'phlebotomy', 'psychology', 'rf cable design technician', 'social work', 'vet tech', 'web design', 'medical experimental autogen text']) {
                    api.post(`${pathToTextGenApi}`, {
                        specialization: params.get('selectedFieldThemeFileName'),
                        word_count: wordCountNum
                    })
                    .then(response => {
                        setProcessedTextString(CONSTANTS.processSpecializedFieldText(params.get('testType'), wordCountNum, response.data.generated_text, textModifiers))
                    })
                    .catch(error => {
                        alert('Failed to load text. Please try again.');
                        navigate(-1);
                    })
                }
                else {
                    fetch(`${import.meta.env.BASE_URL}specialized-field-test-texts/${params.get('selectedFieldThemeFileName')}.txt`)
                    .then(response => response.text())
                    .then(text => {
                        setProcessedTextString(CONSTANTS.processSpecializedFieldText(params.get('testType'), wordCountNum, text, textModifiers))
    
                    })
                }
            }
        }


        else if (params.has('testChoice')) {
            setBasicTestOption(params.get('testChoice'));
            setTestType(params.get('testChoice'));
            setTimeLimit(Number(params.get('testTime')));
            setWordCount(Number(params.get('testWords')));
            setInsertionPointStyle('Underscore');
            setShowInsertionPoint(true);
            textModifiers = {'Capital Letters': true, 'Punctuation': true, 'Numbers': true, 'Symbols': true}
            setAutoGenModifiers(textModifiers)
            if (params.get('testChoice') === 'word-count') {
                setShowWordCounter(true);
                setShowTimer(false);
            }
            else {
                setShowWordCounter(false);
                setShowTimer(true);
            }

            fetch(`${import.meta.env.BASE_URL}specialized-field-test-texts/generic.txt`)
                .then(response => response.text())
                .then(text => {
                    setProcessedTextString(CONSTANTS.processSpecializedFieldText(params.get('testChoice'), Number(params.get('testWords')), text, textModifiers))
                })
        }


    }


    const finalizeTypingStats = function () {
        if (timerExpired || wordCountReached) {
            const kps = timeElapsed > 0 ? Math.floor(totalCharTyped / timeElapsed) : 0;
            const kph = timeElapsed > 0 ? Math.floor(totalCharTyped / (timeElapsed / 3600)) : 0;
            const cpm = timeElapsed > 0 ? Math.floor(totalCharTyped / (timeElapsed / 60)) : 0;
            const wpm = timeElapsed > 0 ? Math.floor(wordsTyped / (timeElapsed / 60)) : 0;
            const accuracy = totalCharTyped > 0 ? 100 * (charTypedCorrectly / totalCharTyped) : 0;
            
            setTypingSpeedKPS(kps);
            setTypingSpeedKPH(kph);
            setTypingSpeedCPM(cpm);
            setTypingSpeedWPM(wpm);
            setTypingAccuracy(accuracy);
            
            const speedScore = (wpm / 100) + (cpm / 500) + (kps / 10) + (kph / 36000);
            setOverallScore(Math.floor(speedScore * (accuracy / 100) ** 2 * 250));
        }
    }


    const navigateToResults = function(entryId) {

        // saves current version of test in case user wants to take same test again on next page
        sessionStorage.setItem('previousTestURL', window.location.search);

        navigateTo('/BasicTypingTests/TypingTest/TestResults/', {
            state: {
                entryId,
                testDateTimeTaken,
                typingSpeedKPS,
                typingSpeedKPH,
                typingSpeedCPM,
                typingSpeedWPM,
                typingAccuracy,
                overallScore,
                testWordsCompleted: wordsTyped,
                testTimeCompletedIn: timeElapsed,
                basicTestOption,
                customTestBool,
                testType,
                timeLimit,
                wordCount,
                customTimeBool,
                customTextBool,
                autoGenModifiers,
                specializationField,
                insertionPointStyle,
                showInsertionPoint,
                showStats,
                showTimer,
                showWordCounter,
            }
        })
    }


    const saveTestResults = function() {

        api.post(`${pathToTestResultsTable}`, {
            // list backend model table fields as keys with values like: is_private_test: userLoggedInBool ? true : false , test_words_completed: wordsCompleted , etc...
            is_private_test: null,
            is_private_user: null,
            username_tag: null,
            test_date_time_taken: testDateTimeTaken,
            test_typing_speed_kps: typingSpeedKPS,
            test_typing_speed_kph: typingSpeedKPH,
            test_typing_speed_cpm: typingSpeedCPM,
            test_typing_speed_wpm: typingSpeedWPM,
            test_typing_accuracy: typingAccuracy,
            test_overall_score: overallScore,
            test_words_completed: wordsTyped,
            test_time_completed_in: timeElapsed,
            basic_test_option: customTestBool ? null : basicTestOption,
            custom_test_bool: customTestBool ? true : false,
            test_type: testType,
            test_time_limit: timeLimit,
            test_word_count: wordCount,
            test_custom_time_bool: customTimeBool,
            test_custom_time: timeLimit,
            test_custom_text_bool: customTextBool,
            test_modifiers: autoGenModifiers,
            test_specialization_field: specializationField,
            test_insertion_point_style: insertionPointStyle,
            test_show_insertion_point: showInsertionPoint,
            test_show_stats: showStats,
            test_show_timer: showTimer,
            test_show_word_count: showWordCounter,
        })
        .then(response => {
            console.log('Data sent successfully:', response.data);
            const entryId = response.data.id;
            navigateToResults(entryId);
        })
        .catch(error => {
            console.log('Error sending data:', error);
        })
    }


    const handleSeeResults = function() {
        if (timerExpired || wordCountReached) {
            saveTestResults();
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
                <SeeResultsButton timerExpired={timerExpired} wordCountReached={wordCountReached} handleSeeResults={handleSeeResults} />
            </div>
        </>
    )
}

export default TypingTest;
