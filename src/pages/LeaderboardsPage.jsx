import { useState } from 'react';

import LeaderboardFilterButton from '/src/components/leaderboard/LeaderboardFilterButton.jsx';
import Leaderboard from '/src/components/leaderboard/Leaderboard.jsx';

import '/src/App.css';


function LeaderboardsPage () {

    const [selectedLeaderboardOption, setSelectedLeaderboardOption] = useState('');

    const [accordionButtonOpen, setAccordionButtonOpen] = useState(false);

    // const [testTypeOptionsList, setTestTypeOptionsList] = useState([]);

    const [selectedTestType, setSelectedTestType] = useState(null);
    const [selectedSpecializedFieldTheme, setSelectedSpecializedFieldTheme] = useState(null)

    // useEffect( () => {
    //     if (selectedTestType === null) {
    //         console.log('do nothing?')
    //     }
    //     else if (selectedTestType === 'word-count-based') {
    //         setTestTypeOptionsList(['100 Words', '500 Words', '1000 Words', '2000 Words', 'Custom Text'])
    //         setSelectedTestTypeOption('500 Words')
    //     }
    //     else if (selectedTest === 'timer-based') {
    //         setTestTypeOptionsList(['30 secs', '1 min', '2 mins', '3 mins', '5 mins', 'Custom Time'])
    //         setSelectedTestTypeOption('1 min')
    //     }
    // }, [selectedTest])

    const handleDropdownMenuOneChange = function(event) {
        setSelectedTestType(event.target.value)
    }
    const handleDropdownMenuTwoChange = function(event) {
        setSelectedSpecializedFieldTheme(event.target.value)
    }

    const displayTestLeaderboardCaption = function () {
        // a function that displays a leaderboard description "caption" signifying which leaderboard the user wants to see

        // for now only one type of leaderboard will exist (later on leaderboards based on whether a user chose a certain combo of autogenmodifiers, specializationfield, custom text test (no leaderboard entry available for that), range of timed test (1 min increments.. so 1-60sec would be one leaderboard and 1min to 1min 30 or 50 secs would be another leaderboard), and range of word count chosen (similar to how leaderboards would be organized based on 50-100 and 100-200 etc 100 word increments)... other customizations like showing word counter or timer and insertion point style wouldnt be considered when determining which leaderboard test entry will be saved to)


        if (selectedLeaderboardOption === '') {
            return (
                <>
                    <div>(click a leaderboard option to display leaderboard)</div>
                </>
            )
        }
        else if (['100 WORDS', '500 WORDS', '1000 WORDS', '1 MINUTES', '2 MINUTES', '3 MINUTES'].includes(selectedLeaderboardOption)) {
            return (
                <>
                    <span className='leaderboardCaption'>
                        <div className='leaderboardCaption'>"{selectedLeaderboardOption} Based Test" Leaderboard Placements: </div>
                    </span>
                </>
            )
        }
        else if (selectedLeaderboardOption === 'CUSTOM') {
            return (
                <>
                    <span className={`leaderboardCaption  ${ accordionButtonOpen ? '' : 'contentHidden'}`}>
                        <div>"</div>
                        <select onChange={handleDropdownMenuOneChange}>
                            <option value="word-count-based">Word-Count Based</option>
                            <option value="timer-based">Timer Based</option>
                        </select>
                        <div>Test" Leaderboard Placement for Field: "</div>
                        <select name="" id="" onChange={handleDropdownMenuTwoChange}>
                            <option value='generic'>Generic</option>
                            <option value='accounting'>Accounting</option>
                            <option value='architecture'>Architecture</option>
                            <option value='auto-mechanics'>Auto Mechanics</option>
                            <option value='business-law'>Business Law</option>
                            <option value='carpentry'>Carpentry</option>
                            <option value='computer-science'>Computer Science</option>
                            <option value='data-entry'>Data Entry</option>
                            <option value='ems'>EMS</option>
                            <option value='event-planning'>Event Planning</option>
                            <option value='executive-assistance'>Executive Assistance</option>
                            <option value='financial-analysis'>Financial Analysis</option>
                            <option value='graphic-design'>Graphic Design</option>
                            <option value='marketing'>Marketing</option>
                            <option value='medical-transcription'>Medical Transcription</option>
                            <option value='phlebotomy'>Phlebotomy</option>
                            <option value='psychology'>Psychology</option>
                            <option value='rf-cable-design-technician'>RF Cable Design Technician</option>
                            <option value='social-work'>Social Work</option>
                            <option value='vet-tech'>Vet Tech</option>
                            <option value='web-design'>Web Design</option>
                            <option value='medical-experimental-autogen-text'>Medical - experimental text auto-generation</option>
                        </select>
                        <div>"</div>
                    </span>
                </>
            )
        }
    }


    return (
        <>
            <div className='genericPageTitle'>Leaderboards</div>

            <div className='genericSectionComment'>(Click generic preset test buttons to see leaderboards or define the custom test leaderboard you want to see)</div>

            <span className='quickStartTestRow quickStartTestRowLeaderboards'>
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'100 WORDS'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'500 WORDS'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'1000 WORDS'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'1 MINUTES'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'2 MINUTES'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'3 MINUTES'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'CUSTOM'} showArrowIcons={true} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} selectedLeaderboardOption={selectedLeaderboardOption} setSelectedLeaderboardOption={setSelectedLeaderboardOption} />
            </span>

            <div className='genericSectionTitle'>{displayTestLeaderboardCaption()}</div>

        </>
    )
}

export default LeaderboardsPage;