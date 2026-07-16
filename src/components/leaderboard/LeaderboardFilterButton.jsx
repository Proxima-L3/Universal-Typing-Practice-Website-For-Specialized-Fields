import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import '/src/App.css';


function LeaderboardFilterButton ({ className, cardText, showArrowIcons, accordionButtonOpen, setAccordionButtonOpen, selectedLeaderboardOption, setSelectedLeaderboardOption, setSelectedTestType, setSelectedSpecializedFieldTheme }) {

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
        console.log(cardText)
        console.log(selectedLeaderboardOption)
        setSelectedLeaderboardOption(cardText);
    }

    const setCardTextToBackendTestTypeValues = function () {
        if (['100 WORDS', '500 WORDS', '1000 WORDS'].includes(cardText)) {
            setSelectedTestType('word-count');
            setSelectedSpecializedFieldTheme('generic');
        }
        else if (['1 MINUTES', '2 MINUTES', '3 MINUTES'].includes(cardText)) {
            setSelectedTestType('timed');
            setSelectedSpecializedFieldTheme('generic');
        }
    }

    return (
        <>
            <div className={`quickLinkCard ${className || ''}`} onClick={() => { updateAccordionArrowStatus(); updateSelectedLeaderboardOption(); setCardTextToBackendTestTypeValues(); }} >
                <IoIosArrowForward className={`${ showArrowIcons ? 'arrowIcon' : 'contentHidden'} ${ accordionButtonOpen ? 'accordionToggle' : '' }`} />
                {cardText}
                <IoIosArrowBack className={`${ showArrowIcons ? 'arrowIcon' : 'contentHidden'} ${ accordionButtonOpen ? 'accordionToggle' : '' }`} />
            </div>
        </>
    )
}

export default LeaderboardFilterButton;