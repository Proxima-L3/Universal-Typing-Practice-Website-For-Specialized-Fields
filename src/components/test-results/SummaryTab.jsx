// import { useState, useRef, useEffect } from 'react';

// import { useLocation } from 'react-router-dom';

import '../App.css';


function SummaryTab () {

    // page session location object that will be used to retrieve values previously saved to session storage
    const locationObject = useLocation();

    // all the previously saved session data
    const entryId = locationObject.state?.entryId
    const testDateTimeTaken = locationObject.state?.testDateTimeTaken
    const typingSpeedKPS = locationObject.state?.typingSpeedKPS
    const typingSpeedKPH = locationObject.state?.typingSpeedKPH
    const typingSpeedCPM = locationObject.state?.typingSpeedCPM
    const typingSpeedWPM = locationObject.state?.typingSpeedWPM
    const typingAccuracy = locationObject.state?.typingAccuracy
    const testWordsCompleted = locationObject.state?.testWordsCompleted
    const testTimeCompletedIn = locationObject.state?.testTimeCompletedIn
    const basicTestOption = locationObject.state?.basicTestOption
    const customTestBool = locationObject.state?.customTestBool
    const testType = locationObject.state?.testType
    const timeLimit = locationObject.state?.timeLimit
    const wordCount = locationObject.state?.wordCount
    const customTimeBool = locationObject.state?.customTimeBool
    const customTextBool = locationObject.state?.customTextBool
    const autoGenModifiers = locationObject.state?.autoGenModifiers
    const specializationField = locationObject.state?.specializationField
    const insertionPointStyle = locationObject.state?.insertionPointStyle
    const showInsertionPoint = locationObject.state?.showInsertionPoint
    const showStats = locationObject.state?.showStats
    const showTimer = locationObject.state?.showTimer
    const showWordCounter = locationObject.state?.showWordCounter


                // entryId,
                // testDateTimeTaken,
                // typingSpeedKPS: null,
                // typingSpeedKPH: null,
                // typingSpeedCPM: null,
                // typingSpeedWPM: wordsTyped / (timeElapsed / 60),
                // typingAccuracy: 100 * (charTypedCorrectly / totalCharTyped),
                // testWordsCompleted: wordsTyped,
                // testTimeCompletedIn: timeElapsed,
                // basicTestOption,
                // customTestBool,
                // testType,
                // timeLimit,
                // wordCount,
                // customTimeBool,
                // customTextBool,
                // autoGenModifiers,
                // specializationField,
                // insertionPointStyle,
                // showInsertionPoint,
                // showStats,
                // showTimer,
                // showWordCounter,


    const displaySummaryTab = function () {
        // insert test results summary and leaderboard tabs with styling
        
        // insert test results Test Summary Title with styling
        
        
        // insert test results summary column one
        
        // insert test results summary column two

    }

    return (
        <>
            <div className='testResultsSummaryTab'>{displaySummaryTab()}</div>
        </>
    )
}

export default SummaryTab;