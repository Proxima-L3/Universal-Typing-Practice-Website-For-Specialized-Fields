import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionShowStats () {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')

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
            <GenericRadioButton optionsList={['Show', 'Hide']} rowLabel='Stats: ' selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </>
    )
}

export default OptionShowStats;