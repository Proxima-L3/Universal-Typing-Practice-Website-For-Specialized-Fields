import {useState, useEffect} from 'react';

import '/src/App.css';


function GenericMultiChoiceButton ({optionsList, rowLabel}) {

    // const [selectedOption, setSelectedOption] = useState('')
    const [selectedOptionsList, setSelectedOptionsList] = useState(Array(optionsList.length).fill(false))

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
            <span className='genericButtonGroupRow'>
                <div className='genericButtonGroupLabel'>{rowLabel}</div>
                <div className='genericCheckBoxGroup'>
                    {optionsList.map((option, index) => (
                        <button
                            // type='checkbox'
                            key={option}
                            className={`checkBoxOption ${selectedOptionsList[index] ? 'checkBoxOptionSelected' : ''}`}
                            onClick={() => setSelectedOptionsList(selectedOptionsList.toSpliced(index, 1, selectedOptionsList[index] ? false : true
                            ))}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </span>
        </>
    );
}

export default GenericMultiChoiceButton;