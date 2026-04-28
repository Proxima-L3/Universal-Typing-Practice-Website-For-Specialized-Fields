// import {useState, useEffect} from 'react';

import QuickLinkCard from '../components/common/QuickLinkCard.jsx';
import CustomTestSectionForm from '/src/components/custom-test-section/CustomTestSectionForm.jsx';
// import CustomTestOptionsAccordion from '../components/custom-test-section/CustomTestOptionsAccordion';
// import OptionTestType from '../components/custom-test-section/OptionTestType';
// import OptionInsertionPointStyle from '../components/custom-test-section/OptionInsertionPointStyle';
// import ShowInsertionPointCheckBox from '../components/custom-test-section/ShowInsertionPointCheckBox';
// import OptionShowStats from '../components/custom-test-section/OptionShowStats';
// import OptionShowTimer from '../components/custom-test-section/OptionShowTimer';
// import OptionShowWordCounter from '../components/custom-test-section/OptionShowWordCounter';

import '/src/App.css';


function BasicTypingTestsPage () {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)

    // const [selectedTest, setSelectedTest] = useState('Timer Based');
    // const [selectedTestTypeOption, setSelectedTestTypeOption] = useState('1 min');
    // const [customTime, setCustomTime] = useState('00:00');
    // const [customTextInput, setCustomTextInput] = useState('no text was entered lols')
    // const [selectedModifiers, setSelectedModifiers] = useState({'Capital Letters': true, 'Punctuation': true, 'Numbers': false, 'Symbols': false})
    // const [selectedInsertionPoint, setSelectedInsertionPoint] = useState('Underscore');
    // const [isChecked, setIsChecked] = useState(true);
    // const [selectedOptionShowStats, setSelectedOptionShowStats] = useState('Show');
    // const [selectedOptionShowTimer, setSelectedOptionShowTimer] = useState('Show');
    // const [selectedOptionShowWordCounter, setSelectedOptionShowWordCounter] = useState('Show');

    return (
        <>
            <div className='genericPageTitle'>Basic Typing Tests</div>

            <div className='genericSectionTitle'>Word-Count Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'100 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={100} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'500 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={500} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1000 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={1000} />
            </span>

            <div className='genericSectionTitle'>Timed Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1 MINUTE'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={60} testWords={null} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'2 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={120} testWords={null} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'3 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={180} testWords={null} />
            </span>

            <div className='genericSectionTitle'>Custom Test</div>
            <CustomTestSectionForm />

        </>
    )
}

export default BasicTypingTestsPage;