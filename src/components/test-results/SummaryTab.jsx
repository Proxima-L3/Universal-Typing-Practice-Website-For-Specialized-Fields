import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { pathToTestResultsTable } from '/src/utils/constants.jsx';
import api from '/src/utils/api.js';
import '/src/App.css';


function SummaryTab ({ setHasSubmittedToLeaderboard, setActiveTab }) {

    const navigateTo = useNavigate();
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

    const [username, setUsername] = useState('');
    const [showUsernameError, setShowUsernameError] = useState(false);


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

    const enterUserToLeaderboard = function () {

        if (username.trim() === '') {
            // alert('Please enter a username')
            setShowUsernameError(true);
            return;
        }
        else if (username.trim() !== '') {
            setShowUsernameError(false);
            api.patch(`${pathToTestResultsTable}${entryId}/`, {
                username_tag: username,
            })
            .then(response => {
                console.log('Data updated successfully:', response.data);
                // below must be in .then so it only runs if patch request is successful (the request is async and setHasSubmittedToLeaderboard(true) is not by default...)
                setHasSubmittedToLeaderboard(true);
                setActiveTab('leaderboard')
            })
            .catch(error => {
                console.log('Error updating data:', error);
            })

            // setActiveTab('leaderboard');
            // wip until leaderboards are up then having get requests to backend to publish stats to leaderboard will make this function be filled in
        }
    }

    const displaySummaryTab = function () {

        const date = new Date(testDateTimeTaken);
        const dateFormatted = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2,'0')}-${date.getFullYear()} / @ ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2,'0')}`;

        return (
            <>
                <div className='summaryRows'>
                        <div className='summaryRowOne'>
                            <div className='statRow'>
                                <span className='statLabel'>Test Type: </span>
                                <span className='statValue'>{customTestBool ? 'Custom - ' : 'Basic Preset - '}{customTestBool ? testType : basicTestOption}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>Date/Time Taken: </span>
                                <span className='statValue'>{dateFormatted}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>Text Filtering Modifiers Chosen: </span>
                                <span className='statValue'>{Object.entries(autoGenModifiers).filter(([key, val]) => val).map(([key]) => key).join(', ')}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>Specialization Field: </span>
                                <span className='statValue'>{specializationField}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>{testType == 'Timer Based' || basicTestOption == 'timed' ? 'Time Limit Chosen' : 'Word-Count Chosen'}: </span>
                                <span className='statValue'>{testType == 'Timer Based' || basicTestOption == 'timed' ? timeLimit : wordCount} Seconds</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>Words Completed: </span>
                                <span className='statValue'>{testWordsCompleted} Words</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>Time Completed in: </span>
                                <span className='statValue'>{testTimeCompletedIn} Secs</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>WPM: </span>
                                <span className='statValue'>{typingSpeedWPM}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>CPM: </span>
                                <span className='statValue'>{typingSpeedCPM}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>KPS: </span>
                                <span className='statValue'>{typingSpeedKPS}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>KPH: </span>
                                <span className='statValue'>{typingSpeedKPH}</span>
                            </div>
                            <div className='statRow'>
                                <span className='statLabel'>Chars Typed Correctly: </span>
                                <span className='statValue'>{Math.floor(typingAccuracy)}%</span>
                            </div>
                        </div>

                        <div className='summaryRowTwo'>
                            <div className='summaryColumnTwoButtons'>
                                <form className='leaderboardUsernameButtonPair' onSubmit={(e) => {
                                    e.preventDefault();
                                    enterUserToLeaderboard();
                                    }}>
                                    <input className='userNameInputBox' type='text' placeholder='Enter Username' value={username} maxLength={15} required onChange={(e) => setUsername(e.target.value)}/>
                                    <button className={`quickLinkCard smallQuickLinkCard ${setHasSubmittedToLeaderboard ? 'tabButtonDisabled' : ''}`} type='submit' disabled={hasSubmittedToLeaderboard}>Submit to Leaderboard</button>
                                </form>
                                <button className='quickLinkCard smallQuickLinkCard' 
                                    onClick={() => navigateTo({
                                        pathname: '/BasicTypingTests/TypingTest',
                                        search: sessionStorage.getItem('previousTestURL')
                                    })}>Take Same Test Again</button>
                                <button className='quickLinkCard smallQuickLinkCard' onClick={() => navigateTo('/BasicTypingTests/', { state: { openCustomSection: true } })}>Customize a Different Test</button>
                            </div>
                        </div>
                </div>
            </>
        )
    }

    return (
        <>

            {displayTestDataInConsole()}
            {displaySummaryTab()}
        </>
    )
}

export default SummaryTab;