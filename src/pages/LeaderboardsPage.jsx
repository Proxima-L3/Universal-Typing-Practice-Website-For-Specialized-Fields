import { useState } from 'react';

import LeaderboardFilterButton from '/src/components/leaderboard/LeaderboardFilterButton.jsx';

import '/src/App.css';


function LeaderboardsPage () {

    const [accordionButtonOpen, setAccordionButtonOpen] = useState(false);


    return (
        <>
            <div className='genericPageTitle'>Leaderboards</div>

            <div className='genericSectionComment'>(Click generic preset test buttons to see leaderboards or define the custom test leaderboard you want to see)</div>

            <span className='quickStartTestRow quickStartTestRowLeaderboards'>
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'100 WORDS'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'500 WORDS'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'1000 WORDS'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'1 MINUTE'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'2 MINUTES'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'3 MINUTES'} showArrowIcons={false} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
                <LeaderboardFilterButton className='quickLinkCardSmall' cardText={'CUSTOM'} showArrowIcons={true} accordionButtonOpen={accordionButtonOpen} setAccordionButtonOpen={setAccordionButtonOpen} />
            </span>

        </>
    )
}

export default LeaderboardsPage;