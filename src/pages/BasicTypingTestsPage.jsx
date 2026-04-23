import {useState, useEffect} from 'react';

import QuickLinkCard from '../components/common/QuickLinkCard';
import CustomTestOptionsAccordion from '../components/custom-test-section/CustomTestOptionsAccordion';
import OptionTestType from '../components/custom-test-section/OptionTestType';
import OptionInsertionPointStyle from '../components/custom-test-section/OptionInsertionPointStyle';
import ShowInsertionPointCheckBox from '../components/custom-test-section/ShowInsertionPointCheckBox';
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

    const [selectedTest, setSelectedTest] = useState('Timer Based');
    const [selectedTestTypeOption, setSelectedTestTypeOption] = useState('1 min');
    const [customTime, setCustomTime] = useState('00:00');

    const [selectedModifiers, setSelectedModifiers] = useState({'Capital Letters': true, 'Punctuation': true, 'Numbers': false, 'Symbols': false})
    const [selectedInsertionPoint, setSelectedInsertionPoint] = useState('Underscore');
    const [isChecked, setIsChecked] = useState(true);
    const [selectedOptionShowStats, setSelectedOptionShowStats] = useState('Show');
    const [selectedOptionShowTimer, setSelectedOptionShowTimer] = useState('Show');
    const [selectedOptionShowWordCounter, setSelectedOptionShowWordCounter] = useState('Show');

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
                <OptionTestType accordionSectionOpen={accordionSectionOpen} selectedTest={selectedTest} setSelectedTest={setSelectedTest} selectedTestTypeOption={selectedTestTypeOption} setSelectedTestTypeOption={setSelectedTestTypeOption} setCustomTime={setCustomTime} selectedModifiers={selectedModifiers} setSelectedModifiers={setSelectedModifiers} />
                <OptionInsertionPointStyle selectedOption={selectedInsertionPoint} setSelectedOption={setSelectedInsertionPoint} />
                <ShowInsertionPointCheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                <OptionShowStats selectedOption={selectedOptionShowStats} setSelectedOption={setSelectedOptionShowStats} />
                <OptionShowTimer selectedOption={selectedOptionShowTimer} setSelectedOption={setSelectedOptionShowTimer} />
                <OptionShowWordCounter selectedOption={selectedOptionShowWordCounter} setSelectedOption={setSelectedOptionShowWordCounter} />
            </div>
            {/* {displayCustomTestOptions()} */}

        </>
    )
}

export default BasicTypingTestsPage;