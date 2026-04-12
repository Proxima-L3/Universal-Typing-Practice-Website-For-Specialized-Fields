import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionTestType () {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)
    const [selectedTest, setSelectedTest] = useState('')
    const [selectedTestTypeOption, setSelectedTestTypeOption] = useState('')
    const [testTypeOptionsList, setTestTypeOptionsList] = useState([])

    useEffect( () => {
        if (selectedTest === 'Word-Count Based') {
            setTestTypeOptionsList(['100 Words', '500 Words', '1000 Words', '2000 Words', 'Custom'])
        }
        else if (selectedTest === 'Timer Based') {
            setTestTypeOptionsList(['30 secs', '1 min', '2 mins', '3 mins', '5 mins', 'Custom'])
        }
    }, [selectedTest])

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
            <span>
                <GenericRadioButton optionsList={['Word-Count Based', 'Timer Based']} rowLabel='Test Type: ' selectedOption={selectedTest} setSelectedOption={setSelectedTest} />
                <GenericRadioButton optionsList={testTypeOptionsList} rowLabel='' selectedOption={selectedTestTypeOption} setSelectedOption={setSelectedTestTypeOption} />
                {/* <div className='customTestOptionsAccordion' onClick={updateAccordionStatus}>
                </div> */}
            </span>
        </>
    )
}

export default OptionTestType;