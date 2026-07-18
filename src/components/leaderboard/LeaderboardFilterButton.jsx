import { useEffect } from 'react';

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import '/src/App.css';


function LeaderboardFilterButton ({ className, cardText, showArrowIcons, accordionButtonOpen, setAccordionButtonOpen, selectedLeaderboardOption, setSelectedLeaderboardOption, setSelectedTestType, setSelectedSpecializedFieldTheme }) {

    // update accordion button to closed if another option is chosen
    useEffect(() => {
        if (selectedLeaderboardOption !== 'CUSTOM') {
            setAccordionButtonOpen(false);
        }
    }, [selectedLeaderboardOption])

    // update selectedTestType and specialized field state vars if ?

    // checks if accordion button is clicked
    const updateAccordionArrowStatus = function () {
        if (showArrowIcons) {
            if (accordionButtonOpen) {
                setAccordionButtonOpen(false);
            }
            else {
                setAccordionButtonOpen(true);
            }
        }
    }

    // checks which leaderboard option button was clicked and changes its related state var
    const updateSelectedLeaderboardOption = function () {
        setSelectedLeaderboardOption(cardText);
    }

    const setCardTextToBackendTestTypeValues = function () {
        if (['100 WORDS', '500 WORDS', '1000 WORDS'].includes(cardText)) {
            setSelectedTestType('word-count');
            setSelectedSpecializedFieldTheme('generic');
            console.log(cardText)
            console.log(selectedLeaderboardOption)
        }
        else if (['1 MINUTES', '2 MINUTES', '3 MINUTES'].includes(cardText)) {
            setSelectedTestType('timed');
            setSelectedSpecializedFieldTheme('generic');
        }
        else if (cardText === 'CUSTOM') {
            setSelectedTestType('Word-Count Based');
            setSelectedSpecializedFieldTheme('generic');
        }
    }

    return (
        <>
            <div className={`quickLinkCard ${className || ''}`} onClick={() => { updateAccordionArrowStatus(); updateSelectedLeaderboardOption(); setCardTextToBackendTestTypeValues(); }} >
                <IoIosArrowForward className={`${ showArrowIcons ? 'arrowIcon' : 'contentHidden'} ${ accordionButtonOpen ? 'accordionToggle' : '' }`} />
                <div className={`${ selectedLeaderboardOption === cardText ? 'leaderboardSelectedOption' : ''}`}>{cardText}</div>
                <IoIosArrowBack className={`${ showArrowIcons ? 'arrowIcon' : 'contentHidden'} ${ accordionButtonOpen ? 'accordionToggle' : '' }`} />
            </div>
        </>
    )
}

export default LeaderboardFilterButton;