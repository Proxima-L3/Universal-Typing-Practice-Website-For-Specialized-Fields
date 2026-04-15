import {useState, useEffect} from 'react';

import GenericMultiChoiceButton from './GenericMultiChoiceButton';

import '/src/App.css';


function OptionGeneratedTextModifiers () {

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
            <GenericMultiChoiceButton optionsList={['Capital Letters', 'Punctuation', 'Numbers', 'Symbols']} rowLabel='Generated Text Modifiers: ' />
        </>
    )
}

export default OptionGeneratedTextModifiers;