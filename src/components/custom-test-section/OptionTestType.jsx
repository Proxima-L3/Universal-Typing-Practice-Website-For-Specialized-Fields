import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';
import TimerUserInputBox from './TimerUserInputBox';
import TextAreaUserInputBox from './TextAreaUserInputBox';
import OptionGeneratedTextModifiers from './OptionGenTextModifiers';
import * as CONSTANTS from '/src/utils/constants';

import '/src/App.css';


function OptionTestType ({accordionSectionOpen, selectedTest, setSelectedTest, selectedTestTypeOption, setSelectedTestTypeOption, setCustomTime, setCustomTextInput, selectedModifiers, setSelectedModifiers, setSelectedSpecializedFieldTheme}) {

    const [testTypeOptionsList, setTestTypeOptionsList] = useState([])

    useEffect( () => {
        if (selectedTest === 'Word-Count Based') {
            setTestTypeOptionsList(['100 Words', '500 Words', '1000 Words', '2000 Words', 'Custom Text'])
            setSelectedTestTypeOption('500 Words')
        }
        else if (selectedTest === 'Timer Based') {
            setTestTypeOptionsList(['30 secs', '1 min', '2 mins', '3 mins', '5 mins', 'Custom Time'])
            setSelectedTestTypeOption('1 min')
        }
    }, [selectedTest])

    useEffect ( () => {
        if (selectedTestTypeOption === '') {
            console.log('idk')
        }
    })

    const handleDropdownMenuChange = function(event) {
        setSelectedSpecializedFieldTheme(event.target.value)
    }

    return (
        <>
            <GenericRadioButton optionsList={['Word-Count Based', 'Timer Based']} rowLabel='Test Type: ' selectedOption={selectedTest} setSelectedOption={setSelectedTest} />
            <GenericRadioButton optionsList={testTypeOptionsList} rowLabel='' selectedOption={selectedTestTypeOption} setSelectedOption={setSelectedTestTypeOption} />

            <div className={accordionSectionOpen && selectedTest === 'Timer Based' && selectedTestTypeOption === 'Custom Time' ? 'customTimeGroup' : 'contentHidden'}>
                <TimerUserInputBox setCustomTime={setCustomTime} />
            </div>

            <div className={accordionSectionOpen && selectedTest === 'Word-Count Based' && selectedTestTypeOption === 'Custom Text' ? '' : 'contentHidden'}>
                <TextAreaUserInputBox setCustomTextInput={setCustomTextInput} />
            </div>

            <div className={accordionSectionOpen && selectedTestTypeOption !== 'Custom Text' ? '' : 'contentHidden'}>
                <OptionGeneratedTextModifiers selectedModifiers={selectedModifiers} setSelectedModifiers={setSelectedModifiers} />
            </div>

            {/* below dropdown menu is a temporary display placeholder for the initial hardcoded expertise area selection options */}
            <div className={accordionSectionOpen && selectedTestTypeOption !== 'Custom Text' ? '' : 'contentHidden'}>
                <span className='genericButtonGroupRow'>
                    <label className='genericButtonGroupLabel'>{'Specialization Field:'}</label>
                    <select name='' id='' onChange={handleDropdownMenuChange}>
                        <option value='generic'>Generic</option>
                        <option value='accounting'>Accounting</option>
                        <option value='architecture'>Architecture</option>
                        <option value='auto-mechanics'>Auto Mechanics</option>
                        <option value='business-law'>Business Law</option>
                        <option value='carpentry'>Carpentry</option>
                        <option value='computer-science'>Computer Science</option>
                        <option value='data-entry'>Data Entry</option>
                        <option value='ems'>EMS</option>
                        <option value='event-planning'>Event Planning</option>
                        <option value='executive-assistance'>Executive Assistance</option>
                        <option value='financial-analysis'>Financial Analysis</option>
                        <option value='graphic-design'>Graphic Design</option>
                        <option value='marketing'>Marketing</option>
                        <option value='medical-transcription'>Medical Transcription</option>
                        <option value='phlebotomy'>Phlebotomy</option>
                        <option value='psychology'>Psychology</option>
                        <option value='rf-cable-design-technician'>RF Cable Design Technician</option>
                        <option value='social-work'>Social Work</option>
                        <option value='vet-tech'>Vet Tech</option>
                        <option value='web-design'>Web Design</option>
                        <option value='medical-experimental-autogen-text'>Medical - experimental text auto-generation</option>
                        {/* <option value='debugging-temp'>DEBUG ME</option> */}
                    </select>
                </span>
            </div>
        </>
    )
}

export default OptionTestType;