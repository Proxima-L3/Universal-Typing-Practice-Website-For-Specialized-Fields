import {useState, useEffect} from 'react';

import '/src/App.css';


function GenericMultiChoiceButton ({optionsDict, setOptionsDict, rowLabel}) {

    // const [selectedOptionsList, setSelectedOptionsList] = useState(Array(optionsList.length).fill(false))

    return (
        <>
            <span className='genericButtonGroupRow'>
                <label className='genericButtonGroupLabel'>{rowLabel}</label>
                <div className='genericCheckBoxGroup'>
                    {Object.entries(optionsDict).map(([option, isSelected]) => (
                        <button
                            // type='checkbox'
                            key={option}
                            className={`checkBoxOption ${isSelected ? 'checkBoxOptionSelected' : ''}`}
                            onClick={() => setOptionsDict({...optionsDict, [option]: !isSelected})}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {/* <div className='genericCheckBoxGroup'>
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
                </div> */}

            </span>
        </>
    );
}

export default GenericMultiChoiceButton;