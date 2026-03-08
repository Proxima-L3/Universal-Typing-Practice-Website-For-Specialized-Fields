import { useState, useEffect, useRef } from 'react';

// import AutosizeInput from 'react-input-autosize';

import * as CONSTANTS from '../utils/constants.jsx'
import { isAlphNumSym } from '../utils/constants.jsx';
import Timer from './Timer.jsx';

import '../App.css'

// Defines text box component that when selected, listens for user text input and updates state of text in text box.
function TypingPracticeField() {
  const typingPracText = CONSTANTS.TYPING_PRAC_TEXT_SAMPLE_1;
  const typingPracTextArray = typingPracText.split('');
  const [counter, setCounter] = useState(0);
  const [userTextArray, setUserTextArray] = useState([]);

  // const [typeText, setTypeText] = useState(typingPracText)
  // const [userText, setUserText] = useState("")

  // Function that checks currently typed char and: if userTextArray length matches typingPracTextArray length then "exit" (ie will later add code to stop timer, finalize results, unfocus typing practice field component, & display post test screen), else if backspace then decrement counter by 1 and remove last item from userTextArray, else if input is alphanumeric or a symbol then check if user's currently typed char is same value as current index of typePracTextArray and if so add current letter to end of userTextArray but as green and if not add it as red.
  const onType = function(currentInputEvent) {
    let currentInputText = currentInputEvent.key

    if (userTextArray.length === typingPracTextArray.length) {
      console.log('practice run is complete')
    }
    else if (currentInputEvent.key === 'Backspace') {
      if (counter) {
      console.log('bs ' + counter)
      setCounter(counter - 1)
      // setUserTextArray(userTextArray.pop())
      setUserTextArray(userTextArray.slice(0,-1))
      }
    }
    else if (isAlphNumSym(currentInputText)) {

      if (currentInputText === typingPracTextArray[counter]) {
        // setUserTextArray([...userTextArray, <span className='green' key={'userTextArray' + counter}>{currentInputText}</span>])
        setUserTextArray([...userTextArray, <span className='correctInput' key={'userTextArray' + counter}>{typingPracTextArray[counter]}</span>])
      }
      else {
        // setUserTextArray([...userTextArray, <span className="red" key={'userTextArray' + counter}>{currentInputText}</span>])
        setUserTextArray([...userTextArray, <span className='incorrectInput' key={'userTextArray' + counter}>{typingPracTextArray[counter]}</span>])
      }
      setCounter(counter + 1)
    }
    else {
      console.log('something went wrong: in TypingPracticeField')
    }
  }
  
  // A variable used to hold a new array made of the array of user typed text (colored accordingly) and the rest of the typing practice text
  const displayTextArray = userTextArray.concat(typingPracTextArray.slice(userTextArray.length).map((c) => <span className='practiceText'>{c}</span>))  // note: figure out how to add key prop to avoid that "every child must have unique key" error

  // A useEffect/useRef block of code to autofocus the typing field
  const autoFocusElement = useRef(null);

  useEffect(() => {
      autoFocusElement.current.focus();
  }, []);

  // An alternative to the above ..(i believe this can be moved to an export module)
  // const autoFocus = (element) => element?.focus();

  return (
    <div>
      {/* google bind keydown react webpage.. or maybe look for react components that act as text input boxes/areas?? or something similar?...*/}
      <p className='typingPracField'  tabIndex='2' onKeyDown={onType} ref={autoFocusElement}>{displayTextArray}</p>
    </div>
  )
}


export default TypingPracticeField;