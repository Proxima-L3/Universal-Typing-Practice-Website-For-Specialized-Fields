import {useState, useEffect} from 'react';

import '/src/App.css';


function GenericRadioButton ({optionsList}) {

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
            <div className='genericRadioButtonGroup'>
                {/* <span></span> */}
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
        </>
    );
}

export default GenericRadioButton;