import { useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// import QuickLinkCard from "../components/common/QuickLinkCard";
import SummaryTab from '../components/test-results/SummaryTab';
import LeaderboardTab from '../components/test-results/LeaderboardTab';

import '../App.css';


function TestResultsPage () {

    const snapShotData = JSON.parse(sessionStorage.getItem('typingPracticeFieldSnapshot'));

    const typingPracFieldSnapshot = snapShotData.userText.map((item, i) => (
        <span className={item.className} key={i}>{item.char}</span>
    )).concat(snapShotData.practiceText.slice(snapShotData.userText.length).map((char, i) => (
        <span className='practiceText' key={'rest' + i}>{char}</span>
    )));
    
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

    return (
        <>
            <div>{displayTestDataInConsole()}</div>
            <div className='testResultsTestSnapshot'>{displayTypingPracFieldSnapshot()}</div>
            <hr className='sectionDividerBottom'/>

            <div className='testResultsSectionTitle' ref={testSectionRef}>Test Results</div>
            <hr className='sectionDividerTop'/>
            <SummaryTab></SummaryTab>
            {/* <LeaderboardTab></LeaderboardTab> */}
        </>
    )
}

export default TestResultsPage;