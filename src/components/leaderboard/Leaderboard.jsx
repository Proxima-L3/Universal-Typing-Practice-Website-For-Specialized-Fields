import { useState, useEffect } from 'react';

import { pathToLeaderboardEntriesTable, leaderboardFilterQuery } from '/src/utils/constants.jsx';
import api from '/src/utils/api.js';

import '/src/App.css';


function Leaderboard ({ displayLeaderboardTrigger, selectedTestType, selectedSpecializedFieldTheme }) {

    const [leaderboardRows, setLeaderboardRows] = useState([])
    
    useEffect(() => {
        retrieveLeaderboardFilterData();
    }, [displayLeaderboardTrigger])

    const retrieveLeaderboardFilterData = function () {
        // insert logic that gets entries for the basic leaderboards as well as for custom user defined leaderboards
        api.get(`${pathToLeaderboardEntriesTable}${leaderboardFilterQuery}`, {
            params: {
                test_type: selectedTestType,
                specialization_field: selectedSpecializedFieldTheme,
                // entry_id: entryId
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

    return (
        <>
            <table>
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
                        <tr key={entry.id} className=''>
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

export default Leaderboard;