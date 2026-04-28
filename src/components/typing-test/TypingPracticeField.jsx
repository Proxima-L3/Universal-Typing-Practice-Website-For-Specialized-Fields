import { useState, useEffect, useRef } from 'react';

// import AutosizeInput from 'react-input-autosize';

import * as CONSTANTS from '../../utils/constants.jsx';
import { isAlphNumSym } from '../../utils/constants.jsx';
import Timer from './timed/Timer.jsx';

import '../../App.css';

// Defines text box component that when selected, listens for user text input and updates state of text in text box.
function TypingPracticeField({setTestStarted, timerExpired, wordCountReached, setWordCountReached, setWordsTyped, setCharTypedCorrectly, setTotalCharTyped, testRestarted, setTestRestarted, showInsertionPoint, insertionPointStyle,}) {
  const typingPracText = CONSTANTS.TYPING_PRAC_TEXT_SAMPLE_1;
  const typingPracTextArray = typingPracText.split('');
  const [counter, setCounter] = useState(0);
  const [userTextArray, setUserTextArray] = useState([]);
  // const [userTextArrayExposed, setUserTextArrayExposed] = useState([]);
  const [isFirstKeyPress, setIsFirstKeyPress] = useState(true)

  // checks if test has been restarted and if so resets all the states in TypingPracticeField
  useEffect( () => {
    if (testRestarted) {
      setCounter(0);
      setUserTextArray([]);
      setIsFirstKeyPress(true);
      setTestRestarted(false);
      autoFocusElement.current.focus();
    }
  }, [testRestarted]);

  
  // A useEffect/useRef block of code to autofocus the typing field
  const autoFocusElement = useRef(null);

  useEffect(() => {
      autoFocusElement.current.focus();
  }, [testRestarted]);

  // An alternative to the above ..(i believe this can be moved to an export module)
  // const autoFocus = (element) => element?.focus();


  // Function that checks currently typed char and: if timerExpired or wordCountReached (depending on which test the user chose) is true stop receiving input from user and make see results button visible and "exit" (ie will later add code finalize results, unfocus typing practice field component?, & display see results button); else if backspace then decrement counter by 1, remove last item from userTextArray, and update UserTypingStats state variables; else if input is alphanumeric or a symbol, then check if it is first input, check if user's currently typed char is same value as current index of typePracTextArray and if so add current letter to end of userTextArray but as green and if not add it as red, and then update UserTypingStats state variables. ...(!!! IM REALIZING THIS FUNCTION DOCUMENTATION IS REDUNDANT BC IT JUST REHASHES ONTYPE'S CODE RATHER THAN STATING WHAT IT DOES/IS RESPONSIBLE FOR.. CHANGE LATER.)
  const onType = function(currentInputEvent) {
    let currentInputText = currentInputEvent.key
    let updatedUserArray
    // let updatedUserArrayExposed

    // prevents ' & / from opening quick find links search box and space from going down page in firefox while test is still running
    (!timerExpired || !wordCountReached) && (["'", '/', ' '].includes(currentInputText)) ? currentInputEvent.preventDefault() : null;

    // get rid of the first conditional (not needed if typing test is timed)
    // if (userTextArray.length === typingPracTextArray.length) {
    //   console.log('practice run is complete')
    // }
    console.log('timer bool: ' + timerExpired)
    console.log('word-count bool: ' + wordCountReached)
    if (timerExpired || wordCountReached) {
      console.log('practice run is completed. no input allowed.')
    }
    else if (currentInputEvent.key === 'Backspace') {
      if (counter) {
      console.log('bs ' + counter)
      setCounter(counter - 1)
      updatedUserArray = userTextArray.slice(0,-1)
      setUserTextArray(updatedUserArray)

      // makes array of every instance of a space in the userTextArray and sets wordsTyped to the length
      setWordsTyped(updatedUserArray.filter(spaces => spaces.props.children === ' ').length)
      // makes array of every instance of correctly typed characters and sets charTypedCorrectly to the length
      setCharTypedCorrectly(updatedUserArray.filter(spaces => spaces.props.className === 'correctInput').length)
      // sets totalCharTyped to the number of typed characters
      setTotalCharTyped(updatedUserArray.length)
      }
    }
    else if (isAlphNumSym(currentInputText)) {

      // this code will only run once on the initial alphanumeric user input
      if (isFirstKeyPress) {
        console.log('code that runs once!')
        setIsFirstKeyPress(false)
        setTestStarted(true)
      }
      
      // add typed text as green or red span objects to userTextArray
      if (currentInputText === typingPracTextArray[counter]) {
        updatedUserArray = [...userTextArray, <span className='correctInput' key={'userTextArray' + counter}>{typingPracTextArray[counter]}</span>]
        setUserTextArray(updatedUserArray)
      }
      else {
        updatedUserArray = [...userTextArray, <span className='incorrectInput' key={'userTextArray' + counter}>{typingPracTextArray[counter]}</span>]
        setUserTextArray(updatedUserArray)
      }
      
      // updatedUserArrayExposed = [...userTextArrayExposed, currentInputText]
      // setUserTextArrayExposed(updatedUserArrayExposed)

      // makes array of every instance of a space in the userTextArray and sets wordsTyped to the length
      // setWordsTyped(userTextArray.filter(spaces => spaces.props.children === ' ').length)
      setWordsTyped(updatedUserArray.filter(spaces => spaces.props.children === ' ').length)
      // makes array of every instance of correctly typed characters and sets charTypedCorrectly to the length
      setCharTypedCorrectly(updatedUserArray.filter(spaces => spaces.props.className === 'correctInput').length)
      // sets totalCharTyped to the number of typed characters
      setTotalCharTyped(updatedUserArray.length)
      

      // checks if length of updatedUserArray is same as typingPracTextArray length and if so sets wordCountReached to true
      if (updatedUserArray.length === typingPracTextArray.length) {
        setWordCountReached(true)
      }


      // increment
      setCounter(counter + 1)
    }
    else {
      // console.log('something went wrong: in TypingPracticeField')
    }

    
  }
  
  // A variable used to hold a new array made of the array of user typed text (colored accordingly) and the rest of the typing practice text
  const displayTextArray = userTextArray.concat(<span className={`nextInput${showInsertionPoint ? insertionPointStyle : ''}`}>{typingPracTextArray[userTextArray.length]}</span>).concat(typingPracTextArray.slice(userTextArray.length + 1).map((c) => <span className='practiceText'>{c}</span>))  // note: figure out how to add key prop to avoid that "every child must have unique key" error

  return (
    <>
      <div className='typingPracField'  tabIndex='2' onKeyDown={onType} onBlur={() => timerExpired || wordCountReached ? null : autoFocusElement.current.focus()} ref={autoFocusElement}>{displayTextArray}</div>
    </>
  )
}


export default TypingPracticeField;