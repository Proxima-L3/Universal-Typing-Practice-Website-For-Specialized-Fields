// import { useState, useEffect, useRef } from 'react';

// import { useNavigate, useSearchParams } from 'react-router-dom';

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import '/src/App.css';
// import { leaderboardFilterQuery, pathToLeaderboardEntriesTable } from '../../utils/constants';


function LeaderboardFilterButton ({ className, cardText, showArrowIcons, accordionButtonOpen, setAccordionButtonOpen, selectedLeaderboardOption, setSelectedLeaderboardOption, setSelectedTestType, setSelectedSpecializedFieldTheme }) {

    // useEffect(() => {
    //     getLeaderboardFilterData();
    // }, [selectedLeaderboardOption]);

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

    // const getLeaderboardFilterData = function () {
    //     // insert logic that gets entries for the basic leaderboards as well as for custom user defined leaderboards
    //     api.get(`${pathToLeaderboardEntriesTable}${leaderboardFilterQuery}`, {
    //         params: {
    //             // leaderboard: true,
    //             test_type: testType,
    //             specialization_field: specializationField,
    //             // entry_id: entryId
    //         }
    //     })
    //     .then(response => {
    //         console.log('Leaderboard data retrieved successfully:', response.data);
    //         setLeaderboardRows(response.data);
    //     })
    //     .catch(error => {
    //         console.log('Error retrieving leaderboard data:', error);
    //     })
    // }\

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