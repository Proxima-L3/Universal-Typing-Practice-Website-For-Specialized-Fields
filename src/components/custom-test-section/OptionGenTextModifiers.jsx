import {useState, useEffect} from 'react';

import GenericMultiChoiceButton from './GenericMultiChoiceButton';

import '/src/App.css';


function OptionGeneratedTextModifiers ({selectedModifiers, setSelectedModifiers}) {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)

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
            <GenericMultiChoiceButton optionsDict={selectedModifiers} setOptionsDict={setSelectedModifiers} rowLabel='Generated Text Modifiers: ' />
        </>
    )
}

export default OptionGeneratedTextModifiers;