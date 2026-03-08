import Timer from './components/Timer.jsx';
import TypingPracticeField from './components/TypingPracticeField.jsx'

// Main App function to be exported to main.jsx & index.html
function App() {
  // looks like we may have to insert code for managing state between components here (TypingPracticeField may need to emit an event for Timer to accept so it knows when to start the count down)
  
  return (
    <>
      <h1>THE "APP" COMPONENT BEGINS HERE</h1>

      <Timer/>
      <TypingPracticeField/>
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

