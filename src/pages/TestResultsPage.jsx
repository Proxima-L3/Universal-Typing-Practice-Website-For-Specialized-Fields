import { useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// import QuickLinkCard from "../components/common/QuickLinkCard";
import SummaryTab from '/src/components/test-results/SummaryTab.jsx';
import LeaderboardTab from '/src/components/test-results/LeaderboardTab.jsx';

import '/src/App.css';


function TestResultsPage () {
    
    const [activeTab, setActiveTab] = useState('summary');
    
    const snapShotData = JSON.parse(sessionStorage.getItem('typingPracticeFieldSnapshot'));
    
    const typingPracFieldSnapshot = snapShotData.userText.map((item, i) => (
        <span className={item.className} key={i}>{item.char}</span>
    )).concat(snapShotData.practiceText.slice(snapShotData.userText.length).map((char, i) => (
        <span className='practiceText' key={'rest' + i}>{char}</span>
    )));
    
    // a useRef & useEffect statement that automatically scrolls past the test snapshot to the test result section of the page on page load
    const testSectionRef = useRef(null);
    
    useEffect(() => {
        if (testSectionRef.current != null) {
            testSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    
    const displayTypingPracFieldSnapshot = function () {
        return (
            <>
                <div className='typingPracField'>{typingPracFieldSnapshot}</div>
            </>
        )
    }
    
    const displayActiveTab = function () {
        console.log(activeTab)
        if (activeTab == 'summary') {
            return (
                <SummaryTab></SummaryTab>
            )
        }
        else if (activeTab == 'leaderboard'){
            return (
                <LeaderboardTab></LeaderboardTab>
            )
        }
        
        // return (
            //     <>
            
            //     <SummaryTab></SummaryTab>
            //     <div className={`typingStats ${ timerExpired || wordCountReached ? 'typingStatsTestEnded' : 'typingStatsTestRunning'} ${showStats ? '' : 'contentHidden'}`} tabIndex='3'>{displayStats()}</div>
            //     </>
            // )
        }
        
    return (
        <>
            <div className='testResultsTestSnapshot'>{displayTypingPracFieldSnapshot()}</div>
            <hr className='sectionDividerBottom'/>
            <div className='testResultsSectionTitle' ref={testSectionRef}>Test Results</div>
            <hr className='sectionDividerTop'/>
            <div>{displayActiveTab()}</div>
        </>
    )
}

export default TestResultsPage;