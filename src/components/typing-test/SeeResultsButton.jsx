// import { useState, useEffect } from 'react';

import '../../App.css';


function SeeResultsButton({timerExpired, wordCountReached, handleSeeResults}) {

    const displayButton = function() {
        if (timerExpired || wordCountReached) {
            return <button className='resultsButton' tabIndex='4' onClick={handleSeeResults}>See Results</button>
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