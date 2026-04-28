import {useState} from 'react';

import * as CONSTANTS from '/src/utils/constants.jsx';

import '/src/App.css';


function TextAreaUserInputBox ({setCustomTextInput}) {

    const [userCustomTextWordCount, setUserCustomTextWordCount] = useState(0)

    const updatedTextAreaInput = function (userInput) {
        setUserCustomTextWordCount(CONSTANTS.calcWordCount(userInput))
        setCustomTextInput(userInput)
    }

    return (
        <>
            <div className='customTextAreaRow'>
                <div className='customTextAreaWordCounterGroup'>
                    <label className='customTextAreaWordCounterLabel' htmlFor='wordCount' >Words: </label>
                    <input
                        className='customTextAreaWordCounter'
                        id='wordCount'
                        type='counter'
                        placeholder=''
                        name='userCustomTextWordCount'
                        value={userCustomTextWordCount}
                        disabled
                    />
                </div>
                <textarea
                    className='customTextArea'
                    placeholder='Type or paste your custom text here...'
                    name='usersCustomText'
                    onInput={(e) => updatedTextAreaInput(e.target.value)}
                    required
                />
            </div>
        </>
    )
}

export default TextAreaUserInputBox;