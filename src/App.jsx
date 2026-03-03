import { useState, useEffect, useRef } from 'react';
// import AutosizeInput from 'react-input-autosize';
import './App.css'
import * as CONSTANTS from './misc/constants.jsx'
import { isAlphNumSym } from './misc/constants.jsx';

// Defines text box component that when selected, listens for user text input and updates state of text in text box.
function TypingPracticeField() {
  const typingPracText = CONSTANTS.TYPING_PRAC_TEXT_SAMPLE_1;
  const typingPracTextArray = typingPracText.split('');
  const [counter, setCounter] = useState(0);
  const [userTextArray, setUserTextArray] = useState([]);

  // const [typeText, setTypeText] = useState(typingPracText)
  // const [userText, setUserText] = useState("")

  // Function that checks currently typed char and: if userTextArray length matches typingPracTextArray length then "exit" (ie will later add code to stop timer, finalize results, unfocus typing practice field component, & display post test screen), else if backspace then decrement counter by 1 and remove last item from userTextArray, else if input is alphanumeric or a symbol then check if user's currently typed char is same value as current index of typePracTextArray and if so add current letter to end of userTextArray but as green and if not add it as red.
  let onType = function(currentInputEvent) {
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
        setUserTextArray([...userTextArray, <span className='green' key={'userTextArray' + counter}>{currentInputText}</span>])
      }
      else {
        setUserTextArray([...userTextArray, <span className="red" key={'userTextArray' + counter}>{currentInputText}</span>])
      }
      setCounter(counter + 1)
    }
    else {
      console.log('something went wrong')
    }
  }
  
  const displayTextArray = userTextArray.concat(typingPracTextArray.slice(userTextArray.length))

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
      <p className='typing_practice_field'  tabIndex='1' onKeyDown={onType} ref={autoFocusElement}>{displayTextArray}</p>
    </div>
  )
}


// Main App function to be exported to main.jsx & index.html
function App() {
  return (
    <>
      <h1>THE "APP" COMPONENT BEGINS HERE</h1>
      
      <TypingPracticeField />
      {/* should i modularize above component into more components? */}

    </>
  )
}

export default App;










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

