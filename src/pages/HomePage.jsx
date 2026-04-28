// import {useState, useEffect} from 'react';

import QuickLinkCard from "../components/common/QuickLinkCard";

// import '../App.css';


function HomePage () {

    return (
        <>
            <div className='genericTextBlock'>Click an option below to quick start a test! Or go to the "Basic Typing Tests" tab for more test options or to create a custom test.</div>
            <hr className='sectionDividerTop'/>
            
            <span className='quickStartTestRow quickStartTestRowHome'>
                <QuickLinkCard cardText={'500 WORD-COUNT BASED TEST'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={500} />
                <QuickLinkCard cardText={'1 MINUTE TIMED TEST'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={60} testWords={null} />
            </span>

            <hr className='sectionDividerBottom'/>
            <div className='genericTextBlock'>You can also sign in or make an account to experience all the features [insert site name] has to offer!</div>
        </>
    )
}

export default HomePage;