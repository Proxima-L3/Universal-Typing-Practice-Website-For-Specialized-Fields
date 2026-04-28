import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';
import TimerUserInputBox from './TimerUserInputBox';
import TextAreaUserInputBox from './TextAreaUserInputBox';
import OptionGeneratedTextModifiers from './OptionGenTextModifiers';
import * as CONSTANTS from '/src/utils/constants';

import '/src/App.css';


function OptionTestType ({accordionSectionOpen, selectedTest, setSelectedTest, selectedTestTypeOption, setSelectedTestTypeOption, setCustomTime, setCustomTextInput, selectedModifiers, setSelectedModifiers}) {

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
            <div>
                <span className='genericButtonGroupRow'>
                    <label className='genericButtonGroupLabel'>{'Specialization Field:'}</label>
                    <select name='' id=''>
                        <option value='generic'>Generic</option>
                        <option value='accounting'>Accounting</option>
                        <option value='architecture'>Architecture</option>
                        <option value='autoMechanics'>Auto Mechanics</option>
                        <option value='businessLaw'>Business Law</option>
                        <option value='carpentry'>Carpentry</option>
                        <option value='computerScience'>Computer Science</option>
                        <option value='dataEntry'>Data Entry</option>
                        <option value='ems'>EMS</option>
                        <option value='financialAnalysis'>Financial Analysis</option>
                        <option value='marketing'>Marketing</option>
                        <option value='medicalTranscription'>Medical Transcription</option>
                        <option value='phlebotomy'>Phlebotomy</option>
                        <option value='psychology'>Psychology</option>
                        <option value='socialWork'>Social Work</option>
                        <option value='vetTech'>Vet Tech</option>
                        <option value='webDesign'>Web Design</option>
                    </select>
                </span>
            </div>
        </>
    )
}

export default OptionTestType;