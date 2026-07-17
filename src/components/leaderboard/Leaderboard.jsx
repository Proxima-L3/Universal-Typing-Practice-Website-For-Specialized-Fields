import { useState, useEffect } from 'react';

import { BsCaretLeftSquare, BsCaretRightSquare, BsFillCaretLeftSquareFill, BsFillCaretRightSquareFill } from "react-icons/bs";

import { pathToLeaderboardDjangoApp, leaderboardFilterQuery } from '/src/utils/constants.jsx';
import api from '/src/utils/api.js';

import '/src/App.css';


function Leaderboard ({ displayLeaderboardTrigger, selectedTestType, selectedSpecializedFieldTheme }) {

    const [leaderboardRows, setLeaderboardRows] = useState([]);
    
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        retrieveLeaderboardFilterData();
    }, [displayLeaderboardTrigger, currentPage])

    useEffect(() => {
        setCurrentPage(1);
    }, [displayLeaderboardTrigger])

    const retrieveLeaderboardFilterData = function () {
        // insert logic that gets entries for the basic leaderboards as well as for custom user defined leaderboards
        api.get(`${pathToLeaderboardDjangoApp}${leaderboardFilterQuery}`, {
            params: {
                page: currentPage,
                test_type: selectedTestType,
                specialization_field: selectedSpecializedFieldTheme,
                // entry_id: entryId
            }
        })
        .then(response => {
            console.log('Leaderboard data retrieved successfully:', response.data);
            setLeaderboardRows(response.data.results);
            setPrevPage(response.data.previous);
            setNextPage(response.data.next);
        })
        .catch(error => {
            console.log('Error retrieving leaderboard data:', error);
        })
    }

    const renderPrevPageButton = function () {
        if (prevPage === null) {
            return (
                <button className='leaderboardPaginationButtonDisabled' disabled="disabled">
                    <BsCaretLeftSquare size={30} />
                </button>
            )
        }
        else {
            return (
                <button className='leaderboardPaginationButton' type="button" onClick={() => setCurrentPage(prev => prev - 1)}>
                    <BsFillCaretLeftSquareFill size={30} />
                </button>
            )
        }
    }

    const renderNextPageButton = function () {
        if (nextPage === null) {
            return (
                <button className='leaderboardPaginationButtonDisabled' disabled="disabled">
                    <BsCaretRightSquare size={30} />
                </button>
            )
        }
        else {
            return (
                <button className='leaderboardPaginationButton' type="button" onClick={() => setCurrentPage(prev => prev + 1)}>
                    <BsFillCaretRightSquareFill size={30}/>
                </button>
            )
        }
    }

    return (
        <>
            <div className='testResultsLeaderboardTab testResultsTabSection'>

                <div className='leaderboardPaginationRow'>
                    {renderPrevPageButton()}
                    {renderNextPageButton()}
                </div>

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

                <div className='leaderboardPaginationRow'>
                    {renderPrevPageButton()}
                    {renderNextPageButton()}
                </div>

            </div>
        </>
    )
}

export default Leaderboard;