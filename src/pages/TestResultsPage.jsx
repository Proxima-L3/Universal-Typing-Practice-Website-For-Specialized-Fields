import { useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

// import QuickLinkCard from "../components/common/QuickLinkCard";
import SummaryTab from '/src/components/test-results/SummaryTab.jsx';
import LeaderboardTab from '/src/components/test-results/LeaderboardTab.jsx';

import '/src/App.css';


function TestResultsPage () {
    
    const [activeTab, setActiveTab] = useState('summary');
    const [hasSubmittedToLeaderboard, setHasSubmittedToLeaderboard] = useState(false);
    
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
    
    const displayTabTitle = function () {
        if (activeTab === 'summary') {
            return 'Test Results Summary'
        }
        else if (activeTab === 'leaderboard') {
            return 'Test Leaderboard'
        }
    }

    const displayActiveTab = function () {
        if (activeTab === 'summary') {
            return (
                <SummaryTab setHasSubmittedToLeaderboard={setHasSubmittedToLeaderboard} setActiveTab={setActiveTab} ></SummaryTab>
            )
        }
        else if (activeTab === 'leaderboard'){
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


            {/* // insert test results summary and leaderboard tabs with styling */}
            <div className='tabSwitcher'>
                <button
                    className={`tabButton ${activeTab === 'summary' ? 'tabButtonActive' : ''}`}
                    onClick={() => setActiveTab('summary')}>
                    Summary
                </button>

                <button 
                    className={`tabButton ${activeTab === 'leaderboard' ? 'tabButtonActive' : ''} ${!hasSubmittedToLeaderboard ? 'tabButtonDisabled' : ''} `} 
                    onClick={() => hasSubmittedToLeaderboard && setActiveTab('leaderboard')}
                    disabled={!hasSubmittedToLeaderboard}>
                    Leaderboard
                </button>
            </div>

            <div className={`testResultsTabSection ${activeTab === 'summary' ? 'testResultsSummaryTab' : 'testResultsLeaderboardTab'}`}>
                
                <div className='summaryRows'>
                    <div className='genericSectionTitle summaryTitle'>{displayTabTitle()}</div>
                </div>
                
                {displayActiveTab()}
                
            </div>
        </>
    )
}

export default TestResultsPage;