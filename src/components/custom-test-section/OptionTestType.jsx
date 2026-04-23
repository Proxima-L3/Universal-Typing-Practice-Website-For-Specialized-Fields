import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';
import OptionGeneratedTextModifiers from './OptionGenTextModifiers';
import TimerUserInputBox from './TimerUserInputBox';
import * as CONSTANTS from '/src/utils/constants';

import '/src/App.css';


function OptionTestType ({accordionSectionOpen, selectedTest, setSelectedTest, selectedTestTypeOption, setSelectedTestTypeOption, setCustomTime, selectedModifiers, setSelectedModifiers}) {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)

    const [testTypeOptionsList, setTestTypeOptionsList] = useState([])
    const [userCustomTextWordCount, setUserCustomTextWordCount] = useState(0)

    useEffect( () => {
        if (selectedTest === 'Word-Count Based') {
            setTestTypeOptionsList(['100 Words', '500 Words', '1000 Words', '2000 Words', 'Custom Text'])
        }
        else if (selectedTest === 'Timer Based') {
            setTestTypeOptionsList(['30 secs', '1 min', '2 mins', '3 mins', '5 mins', 'Custom Time'])
        }
    }, [selectedTest, selectedTestTypeOption])

    useEffect ( () => {
        if (selectedTestTypeOption === '') {
            console.log('idk')
        }
    })

    const updatedTextAreaInput = function (userInput) {
        setUserCustomTextWordCount(CONSTANTS.calcWordCount(userInput))
    }

    // // checks if accordion component is clicked
    // const updateAccordionStatus = function () {
    //     if (accordionSectionOpen) {
    //         setAccordionSectionOpen(false);
    //     }
    //     else {
    //         setAccordionSectionOpen(true);
    //     }
    // }

    return (
        <>
            <GenericRadioButton optionsList={['Word-Count Based', 'Timer Based']} rowLabel='Test Type: ' selectedOption={selectedTest} setSelectedOption={setSelectedTest} />
            <GenericRadioButton optionsList={testTypeOptionsList} rowLabel='' selectedOption={selectedTestTypeOption} setSelectedOption={setSelectedTestTypeOption} />

            <div className={accordionSectionOpen && selectedTest === 'Timer Based' && selectedTestTypeOption === 'Custom Time' ? 'customTimeGroup' : 'contentHidden'}>
                <TimerUserInputBox setCustomTime={setCustomTime} />
            </div>

            <div className={accordionSectionOpen && selectedTest === 'Timer Based' ? '' : 'contentHidden'}>
                <OptionGeneratedTextModifiers selectedModifiers={selectedModifiers} setSelectedModifiers={setSelectedModifiers} />
            </div>

            <div className={accordionSectionOpen && selectedTest === 'Word-Count Based' && selectedTestTypeOption === 'Custom Text' ? '' : 'contentHidden'}>
                <div className='customTextAreaRow'>
                    <div className='customTextAreaWordCounterGroup'>
                        <label className='customTextAreaWordCounterLabel' htmlFor='wordCount' >Words: </label>
                        <input className='customTextAreaWordCounter' id='wordCount' type='counter' placeholder='' name='userCustomTextWordCount' value={userCustomTextWordCount} disabled />
                    </div>
                    <textarea className='customTextArea' placeholder='Type or paste your custom text here...' name='usersCustomText' onInput={(e) => updatedTextAreaInput(e.target.value)} required />
                </div>
            </div>
        </>
    )
}

export default OptionTestType;