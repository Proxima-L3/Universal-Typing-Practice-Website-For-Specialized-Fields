// THIS FILE ACTS AS A CLIPBOARD FOR ALL THE CODE BLOCKS IM NOT USING BUT MAY WANT TO REFERENCE LATER




//##################################################
//##################################################


/*
Location:
    from App.jsx file
Purpose:
    Below code was a previous solution for a basic user input checker that would: display some text and a user input box, upon user input would check if the current character was typed correctly, and then changed the character from white to red or green depending.
Issue:
    Code wasnt mine and wasnt exactly the solution i was looking for.
*/


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Appl() {
  // const [count, setCount] = useState(0)
  const [text, setText] = useState("cranky")
  const [input, setInput] = useState("")
  const onType = (_) => setInput(input + _.currentTarget.value)

  const printChar = (i) => {
    if (i > input.length - 1) {
      return <span>{text[i]}</span>
    }
    else if (text[i] == input[i]) {
      return <span className="green">{text[i]}</span>
    }
    else {
      return <span className="red">{text[i]}</span>
    }
  }

  return (
    <>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <h1>Vite + React</h1> */}
      
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      
        <p>{text.split("").map((_,i) => printChar(i))}</p>
        <input type="text" value={""} onInput={onType}/>
        {/* {text.split("").map(l => <p>{l}</p>)} */}

        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App





//##################################################
//##################################################


/*
Location:
    from index.html file
Purpose:
    Below html code was made when i first started messing with react & vite.. i have no idea what i was trying to do but its currently cluttering my screen so...
Issue:
    Bunch of junk idk if i actually need and is making my html file messy.
*/


//     <!-- <button id="btn">Click Me!</button> -->
//     <!-- <div id="root"></div> -->
//     <!-- <script type="module" src="/src/(tutorial)_main.jsx"></script> -->

    
//     <!-- i have no clue what below code was for -->
// <!-- 
//      <script>
//      class Header {
//       constructor() {
//         this.color = "Red";
//       }

//       changeColor = function() {
//         document.getElementById("demo").innerHTML += this;
//       }
//     }

//     const myheader = new Header();

//     //The window object calls the function:
//     window.addEventListener("load", myheader.changeColor);

//     //A button object calls the function:
//     document.getElementById("btn").addEventListener("click", myheader.changeColor);

//     </script>
//      -->





//##################################################
//##################################################


/*
Location:
    from OptionTestType file
Purpose:
    below code was a temporary dropdown menu to act as a placeholder for the initial hardcoded specialization field options row until i could make an auto text generation algorithm
Issue:
    kept thinking of fields that could benefit from the site and adding them as options but for a mvp we dont need this many options fn
*/


            // {/* below dropdown menu is a temporary display placeholder for the initial hardcoded expertise area selection options */}
            // <div>
            //     <span className='genericButtonGroupRow'>
            //         <label className='genericButtonGroupLabel'>{'Specialization Field:'}</label>
            //         <select name="" id="">
            //             <option value='generic'>Generic</option>
            //             <option value='accounting'>Accounting</option>
            //             <option value='administrativeAssistance'>Administrative Assistance</option>
            //             <option value='architecture'>Architecture</option>
            //             <option value='autoMechanics'>Auto Mechanics</option>
            //             <option value='businessLaw'>Business Law</option>
            //             <option value='carpentry'>Carpentry</option>
            //             <option value='computerScience'>Computer Science</option>
            //             <option value='customerServiceRep'>Customer Service Rep</option>
            //             <option value='dataEntry'>Data Entry</option>
            //             <option value='emt'>EMT work</option>
            //             <option value='financialAnalysis'>Financial Analysis</option>
            //             <option value='marketing'>Marketing</option>
            //             <option value='medicalTranscription'>Medical Transcription</option>
            //             <option value='phlebotomy'>Phlebotomy</option>
            //             <option value='psychology'>Psychology</option>
            //             <option value='socialWork'>Social Work</option>
            //             <option value='techSupport'>Tech Support</option>
            //             <option value='vetTech'>Vet Tech</option>
            //             <option value='webDesign'>Web Design</option>
            //             <option value='journalism'>Journalism</option>
            //             <option value='transcription'>Transcription</option>
            //             <option value=''></option>
            //             <option value=''></option>
            //             <option value=''></option>
            //             <option value=''></option>
            //         </select>
            //     </span>
            // </div>





//##################################################
//##################################################


/*
Location:
    from README.md file
Purpose:
    some original notes from vite template that may be useful later
Issue:
    merge conflict when trying to push local git repo
*/


// # React + Vite

// This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

// Currently, two official plugins are available:

// - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
// - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// ## Expanding the ESLint configuration

// If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





//##################################################
//##################################################


/*
Location:
    from OptionTestType file
Purpose:
    
Issue:
    
*/





//##################################################
//##################################################


/*
Location:
    from OptionTestType file
Purpose:
    
Issue:
    
*/