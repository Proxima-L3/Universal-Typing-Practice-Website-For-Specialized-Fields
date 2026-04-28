import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import '/src/App.css';


function WordCounter({wordCountReached, setWordCountReached, timerExpired, wordsTyped, testRestarted, setTestRestarted, testType, wordCount, showWordCounter}) {
    // below variable is the length of time the user wants the typing practice session to last.. hardcoded for now: 1 minute or 60,000 ms
    // we can put wordCount & wordsRemaining? state in parent component
    // const wordCount = 100;

    const [searchParams, setSearchParams] = useSearchParams();
    
    const [wordsRemaining, setWordsRemaining] = useState(wordCount);
    // const [timeRemaining, setTimeRemaining] = useState(timerLength);

    useEffect( () => {
        if (testRestarted) {
            setWordsRemaining(wordCount);
            setTestRestarted(false);
        }
    }, [testRestarted])

    useEffect( () => {
        if (testType === 'Word-Count Based' || searchParams.get('testChoice') === 'word-count') {
        // might need below first conditional if words remaining doesnt display 0 at end of test
            if (wordCountReached) {
                setWordsRemaining(0);
            }
            else if (!wordCountReached) {
                setWordsRemaining(wordCount - wordsTyped);
            }
        // below conditional is bad design because it wont allow test to ever end unless the practice text happens to have a space after it ..(number of words in test and how many have been typed so far are determined by number of spaces in userTextArray).. the practice text would just so happen to have a space at the end in order for the test to reach the word count... instead just check if length of userTextArray === length of practiceTextArray in TypingPracticeField component and setWordCountReached to true if so.)
        // else if (wordsTyped === wordCount) {
        //     setWordCountReached(true)
        // }
            else {
                console.log('something went wrong: in WordCounter');
            }
        }
        else if (testType === 'Timer Based') {
            if (timerExpired) {
                console.log('test concluded: word-count wont go up')
            }
        }
    }, [wordsTyped, wordCountReached])

    const displayWordCounter = function() {

        let wordsLeftVar = `${wordsRemaining} Words Left`
        let wordsTypedVar = `${wordsTyped} Words Typed`
        
        if (testType === 'Word-Count Based' || searchParams.get('testChoice') === 'word-count') {

            return (
                <div className={`wordCounter ${ showWordCounter ? '' : 'contentHidden' }`} tabIndex='1'>{wordsLeftVar}</div>
            )
        }
        else if (testType === 'Timer Based') {

            return (
                <div className={`wordCounter extraWidget ${ showWordCounter ? '' : 'contentHidden' }`} tabIndex='1'>{wordsTypedVar}</div>
            )
        }
    }

    return (
        <>
            {displayWordCounter()}
        </>
    )
}


export default WordCounter;