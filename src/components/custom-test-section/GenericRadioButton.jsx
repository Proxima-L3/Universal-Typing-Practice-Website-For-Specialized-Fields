import {useState, useEffect} from 'react';

import '/src/App.css';


function GenericRadioButton ({optionsList, rowLabel, selectedOption, setSelectedOption}) {

    // const [selectedOption, setSelectedOption] = useState('')

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
            <span className='genericRadioButtonGroupRow'>
                <div className='genericRadioButtonGroupLabel'>{rowLabel}</div>
                <div className='genericRadioButtonGroup'>
                    {optionsList.map((option) => (
                        <div
                            key={option}
                            className={`radioButtonOption ${selectedOption === option ? 'radioButtonSelected' : ''}`}
                            onClick={() => setSelectedOption(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </span>
        </>
    );
}

export default GenericRadioButton;