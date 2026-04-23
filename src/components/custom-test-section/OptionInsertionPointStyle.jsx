// import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';

import '/src/App.css';


function OptionInsertionPointStyle ({selectedOption, setSelectedOption}) {

    return (
        <>
            <GenericRadioButton optionsList={['Line', 'Underscore', 'Block']} rowLabel='Insertion Point Style: ' selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </>
    )
}

export default OptionInsertionPointStyle;