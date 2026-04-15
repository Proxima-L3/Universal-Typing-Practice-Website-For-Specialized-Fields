import {useState, useEffect} from 'react';

import QuickLinkCard from '../components/common/QuickLinkCard';
import CustomTestOptionsAccordion from '../components/custom-test-section/CustomTestOptionsAccordion';
import OptionTestType from '../components/custom-test-section/OptionTestType';
import OptionInsertionPointStyle from '../components/custom-test-section/OptionInsertionPointStyle';
import OptionShowStats from '../components/custom-test-section/OptionShowStats';
import OptionShowTimer from '../components/custom-test-section/OptionShowTimer';
import OptionShowWordCounter from '../components/custom-test-section/OptionShowWordCounter';

import '/src/App.css';


function BasicTypingTestsPage () {

    // below 2 lines are temporary.. move elsewhere when taking on different approach to avoid prop drilling
    // const [typingTestChoice, setTypingTestChoice] = useState('timed')
    // setTypingTestChoice('timed')


    const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)
    
    // const displayCustomTestOptions = function () {
    //     if (accordionSectionOpen) {
    //         return (
    //             <>
    //                 <OptionTestType />
    //                 <OptionInsertionPointStyle />
    //                 <OptionShowStats />
    //                 <OptionShowTimer />
    //                 <OptionShowWordCounter />
    //             </>
    //         );
    //     }
    // }

    return (
        <>
            {/* <div className=''></div> */}
            {/* <h1>Basic Typing Tests</h1> */}
            <div className='genericPageTitle'>Basic Typing Tests</div>

            <div className='genericSectionTitle'>Word-Count Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'100 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'500 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1000 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} />
            </span>

            <div className='genericSectionTitle'>Timed Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1 MINUTE'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'2 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'3 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} />
            </span>

            <div className='genericSectionTitle'>Custom Test</div>
            <CustomTestOptionsAccordion accordionSectionOpen={accordionSectionOpen} setAccordionSectionOpen={setAccordionSectionOpen} />
            <div className={accordionSectionOpen ? '' : 'contentHidden'}>
                <OptionTestType accordionSectionOpen={accordionSectionOpen} />
                <OptionInsertionPointStyle />
                <OptionShowStats />
                <OptionShowTimer />
                <OptionShowWordCounter />
            </div>
            {/* {displayCustomTestOptions()} */}

        </>
    )
}

export default BasicTypingTestsPage;