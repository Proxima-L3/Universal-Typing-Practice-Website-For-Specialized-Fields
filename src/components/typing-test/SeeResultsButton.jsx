// import { useState, useEffect } from 'react';

import '../../App.css';


function SeeResultsButton({timerExpired}) {


    const showResults = function() {
        // insert action to do when button is clicked here?
    }

    const displayButton = function() {
        if (timerExpired) {
            return <button className='resultsButton' tabIndex='4'>See Results</button>
        }
        else {
            return null
        }
    }

    return (
        <>
        {displayButton()}
        </>
    )
}


export default SeeResultsButton;