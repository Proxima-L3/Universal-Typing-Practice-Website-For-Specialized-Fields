import { useState, useEffect, useRef } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import '/src/App.css';


function LeaderboardFilterButton ({className, cardText, showArrowIcons, accordionButtonOpen, setAccordionButtonOpen, selectedLeaderboardOption, setSelectedLeaderboardOption}) {

    const customLeaderboardButtonRef = useRef();

    useEffect(() => {
        getLeaderboardFilterData();
    }, [selectedLeaderboardOption]);

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

    const getLeaderboardFilterData = function () {
        // insert logic that gets entries for the basic leaderboards as well as for custom user defined leaderboards
    }

    return (
        <>
            <div className={`quickLinkCard ${className || ''}`} onClick={() => { updateAccordionArrowStatus(); updateSelectedLeaderboardOption(); }} ref={customLeaderboardButtonRef} >
                <IoIosArrowForward className={`${ showArrowIcons ? 'arrowIcon' : 'contentHidden'} ${ accordionButtonOpen ? 'accordionToggle' : '' }`} />
                <div onClick={getLeaderboardFilterData}>
                    {cardText}
                </div>
                <IoIosArrowBack className={`${ showArrowIcons ? 'arrowIcon' : 'contentHidden'} ${ accordionButtonOpen ? 'accordionToggle' : '' }`} />
            </div>
        </>
    )
}

export default LeaderboardFilterButton;