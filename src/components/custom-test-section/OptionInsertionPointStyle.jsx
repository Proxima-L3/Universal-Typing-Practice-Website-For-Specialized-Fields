import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionInsertionPointStyle () {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)
    const [selectedInsertionPoint, setSelectedInsertionPoint] = useState('')

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
            <GenericRadioButton optionsList={['Line', 'Underscore', 'Block']} rowLabel='Insertion Point Style: ' selectedOption={selectedInsertionPoint} setSelectedOption={setSelectedInsertionPoint} />
        </>
    )
}

export default OptionInsertionPointStyle;