import { useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { pathToTestResultsTable, testResultsLeaderboardFilterQuery } from '/src/utils/constants.jsx';
import api from '/src/utils/api.js';
import '/src/App.css';


function LeaderboardTab () {

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

    const [leaderboardRows, setLeaderboardRows] = useState([])


    useEffect(() => {
        retrieveTestLeaderboardData();
    }, []);


    const retrieveTestLeaderboardData = function () {
        // function that will setLeaderboardRows state var into a list of objects representing 51 rows of test entries (the user's entry along with 25 entries above and 25 entries below the user's.. with certain exceptions)
        // algorithm:
        // get user's entry object using backends test_results_leaderboard_filter class/function/model thing
        // look at user's overall score
        // if user overall_score 25th or higher overall_score entries then show top 51 rows (ie user is near top of leaderboard therefore cannot be centered)
        // else if user overall_score < bottom 25 overall_score entries then show bottom 51 rows (ie user is near bottom of leaderboard therefore cannot be centered)
        // otherwise (else) get 25 entries above user entry and 25 below (user centered at relative row 26)

        api.get(`${pathToTestResultsTable}${testResultsLeaderboardFilterQuery}`, {
            params: {
                // leaderboard: true,
                specialization_field: specializationField,
                test_type: testType,
                entry_id: entryId
            }
        })
        .then(response => {
            console.log('Leaderboard data retrieved successfully:', response.data);
            setLeaderboardRows(response.data);
        })
        .catch(error => {
            console.log('Error retrieving leaderboard data:', error);
        })
    }

    const displayTestLeaderboardCaption = function () {
        // a function that displays a leaderboard description "caption" signifying which leaderboard the user's test stats were placed on (the leaderboard shown only includes)

        // for now only one type of leaderboard will exist (later on leaderboards based on whether a user chose a certain combo of autogenmodifiers, specializationfield, custom text test (no leaderboard entry available for that), range of timed test (1 min increments.. so 1-60sec would be one leaderboard and 1min to 1min 30 or 50 secs would be another leaderboard), and range of word count chosen (similar to how leaderboards would be organized based on 50-100 and 100-200 etc 100 word increments)... other customizations like showing word counter or timer and insertion point style wouldnt be considered when determining which leaderboard test entry will be saved to)
        return `(${testType} Test Leaderboard Placement for Field: ${specializationField})`
    }

    return (
        <>
            <table>
                <caption>{displayTestLeaderboardCaption()}</caption>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Overall Score</th>
                        <th>Accuracy %</th>
                        <th>WPM</th>
                        <th>CPM</th>
                        <th>KPS</th>
                        <th>KPH</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardRows.map((entry, i) => (
                        <tr key={entry.id} className={entry.id === entryId ? 'userRow' : ''}>
                            <td>{entry.rank}</td>
                            <td>{entry.username_tag}</td>
                            <td>{entry.test_overall_score}</td>
                            <td>{entry.test_typing_accuracy}%</td>
                            <td>{entry.test_typing_speed_wpm}</td>
                            <td>{entry.test_typing_speed_cpm}</td>
                            <td>{entry.test_typing_speed_kps}</td>
                            <td>{entry.test_typing_speed_kph}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default LeaderboardTab;