import { useState, useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import CustomTestOptionsAccordion from '/src/components/custom-test-section/CustomTestOptionsAccordion';
import OptionTestType from '/src/components/custom-test-section/OptionTestType';
import OptionInsertionPointStyle from '/src/components/custom-test-section/OptionInsertionPointStyle';
import ShowInsertionPointCheckBox from '/src/components/custom-test-section/ShowInsertionPointCheckBox';
import OptionShowStats from '/src/components/custom-test-section/OptionShowStats';
import OptionShowTimer from '/src/components/custom-test-section/OptionShowTimer';
import OptionShowWordCounter from '/src/components/custom-test-section/OptionShowWordCounter';

import '/src/App.css';


function CustomTestSectionForm () {

    const navigateTo = useNavigate();

    const [accordionSectionOpen, setAccordionSectionOpen] = useState(false);

    const [selectedTest, setSelectedTest] = useState('Timer Based');
    const [selectedTestTypeOption, setSelectedTestTypeOption] = useState('1 min');
    const [customTime, setCustomTime] = useState('00:00');
    const [customTextInput, setCustomTextInput] = useState('')
    const [selectedModifiers, setSelectedModifiers] = useState({'Capital Letters': true, 'Punctuation': true, 'Numbers': false, 'Symbols': false})
    const [selectedInsertionPoint, setSelectedInsertionPoint] = useState('Underscore');
    const [isChecked, setIsChecked] = useState(true);
    const [selectedOptionShowStats, setSelectedOptionShowStats] = useState('Show');
    const [selectedOptionShowTimer, setSelectedOptionShowTimer] = useState('Show');
    const [selectedOptionShowWordCounter, setSelectedOptionShowWordCounter] = useState('Show');

    // const handleFormSubmit = async function () {
    const handleFormSubmit = function () {

        const params = new URLSearchParams({
            testType: selectedTest,
            testTypeSubOption: selectedTestTypeOption,
            timeLimit: customTime,
            autoGenModifiers: JSON.stringify(selectedModifiers),
            insertionPointType: selectedInsertionPoint,
            showInsertionPoint: isChecked,
            showStats: selectedOptionShowStats,
            showTimer: selectedOptionShowTimer,
            showWordCounter: selectedOptionShowWordCounter,
            customText: JSON.stringify(customTextInput),
        });

        navigateTo(`/BasicTypingTests/TypingTest/?${params.toString()}`, {
            state: {
                customTextInput
            }
        });

    }

    return (
        <>
            <CustomTestOptionsAccordion accordionSectionOpen={accordionSectionOpen} setAccordionSectionOpen={setAccordionSectionOpen} />
            <div className={accordionSectionOpen ? '' : 'contentHidden'}>
                <OptionTestType accordionSectionOpen={accordionSectionOpen} selectedTest={selectedTest} setSelectedTest={setSelectedTest} selectedTestTypeOption={selectedTestTypeOption} setSelectedTestTypeOption={setSelectedTestTypeOption} setCustomTime={setCustomTime} setCustomTextInput={setCustomTextInput} selectedModifiers={selectedModifiers} setSelectedModifiers={setSelectedModifiers} />
                <OptionInsertionPointStyle selectedOption={selectedInsertionPoint} setSelectedOption={setSelectedInsertionPoint} />
                <ShowInsertionPointCheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                <OptionShowStats selectedOption={selectedOptionShowStats} setSelectedOption={setSelectedOptionShowStats} />
                <OptionShowTimer selectedOption={selectedOptionShowTimer} setSelectedOption={setSelectedOptionShowTimer} />
                <OptionShowWordCounter selectedOption={selectedOptionShowWordCounter} setSelectedOption={setSelectedOptionShowWordCounter} />

                <button className='startTestSubmitFormButton' type='submit' onClick={handleFormSubmit}>Start Test</button>
            </div>
        </>
    )
}

export default CustomTestSectionForm;