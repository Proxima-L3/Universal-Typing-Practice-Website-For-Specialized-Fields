import { useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// import QuickLinkCard from "../components/common/QuickLinkCard";

import '../App.css';


function TestResultsPage () {

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

    const snapShotData = JSON.parse(sessionStorage.getItem('typingPracticeFieldSnapshot'));

    const typingPracFieldSnapshot = snapShotData.userText.map((item, i) => (
        <span className={item.className} key={i}>{item.char}</span>
    )).concat(snapShotData.practiceText.slice(snapShotData.userText.length).map((char, i) => (
        <span className='practiceText' key={'rest' + i}>{char}</span>
    )));
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
    
    // a useRef & useEffect statement that automatically scrolls past the test snapshot to the test result section of the page on page load
    const testSectionRef = useRef(null);

    useEffect(() => {
        if (testSectionRef != null) {
            testSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const displayTestDataInConsole = function () {
        console.log('---------------------------------------------------------')
        console.log('---------------------------------------------------------')
        console.log('entryId:' + entryId)
        console.log('dateTime:' + testDateTimeTaken)
        console.log('kps:' + typingSpeedKPS)
        console.log('kph:' + typingSpeedKPH)
        console.log('cpm:' + typingSpeedCPM)
        console.log('wpm:' + typingSpeedWPM)
        console.log('accuracy:' + typingAccuracy)
        console.log('words completed:' + testWordsCompleted)
        console.log('time completed in:' + testTimeCompletedIn)
        console.log('basic test option:' + basicTestOption)
        console.log('custom test bool:' + customTestBool)
        console.log('test type:' + testType)
        console.log('test time limit:' + timeLimit)
        console.log('test word count:' + wordCount)
        console.log('custom time bool:' + customTimeBool)
        console.log('custom text bool:' + customTextBool)
        console.log('autoGenModifiers:', autoGenModifiers)
        console.log('specialization field:' + specializationField)
        console.log('insertion point style:' + insertionPointStyle)
        console.log('show insertion point:' + showInsertionPoint)
        console.log('show stats:' + showStats)
        console.log('show timer:' + showTimer)
        console.log('show word counter:' + showWordCounter)
        console.log('---------------------------------------------------------')
        console.log('---------------------------------------------------------')
    }

    const displayTypingPracFieldSnapshot = function () {
        return (
            <>
                <div className='typingPracField'>{typingPracFieldSnapshot}</div>
            </>
        )
    }

    const displaySummaryTab = function () {
        // 
    }

    return (
        <>
            <div>{displayTestDataInConsole()}</div>
            <div className='testResultsTestSnapshot'>{displayTypingPracFieldSnapshot()}</div>
            <hr className='sectionDividerBottom'/>

            <div className='testResultsSectionTitle' ref={testSectionRef}>Test Results</div>
            <hr className='sectionDividerTop'/>
            <div className='testResultsSummaryTab'>{displaySummaryTab()}</div>
        </>
    )
}

export default TestResultsPage;