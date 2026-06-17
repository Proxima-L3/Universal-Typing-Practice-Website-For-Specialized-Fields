import {useRef, useEffect} from 'react';


export const frontendURL = 'http://localhost:5173';

export const backendURL = 'http://localhost:8000';

export const pathToTestResultsTable = '/api/test_results_entries/';

export const testResultsLeaderboardFilterQuery = 'return_test_results_page_leaderboard/';

// A simple regex function that checks if a string has any characters that are alphanumeric or a commonly typed symbol and returns a truthy value. (Less noticeably the function also checks if the string is only 1 character long.. this was done to avoid other func keys like backspace from being considered input text.)
export function isAlphNumSym(str) {
    return /^[a-zA-Z0-9 !@#$%^&*()+_=;:,./<>?'"-]{1}$/.test(str);
}

export function calcWordCount(stringOfWords) {
    // const wordsArray = stringOfWords.split(' ');

    // updatedUserArray.filter(spaces => spaces.props.children === ' ').length

    const userTextArray = (stringOfWords.split(/(?<=[a-zA-Z0-9!@#$%^&*()-+_=;:,./<>?'"])\s+/))
    
    let numberOfWords = userTextArray.length

    if (stringOfWords.length !== 0) {
    // if (numberOfWords > 0) {
        numberOfWords = (stringOfWords.split(/(?<=[a-zA-Z0-9!@#$%^&*()-+_=;:,./<>?'"])\s+/)).length + 1
    }

    // return   ((stringOfWords.split(/(?<=[a-zA-Z0-9!@#$%^&*()-+_=;:,./<>?'"])\s+/)).length - 1)
    return (numberOfWords)

}

export function applyModifiers(fieldTextString, pracTextModifiers) {

    let textWithModifiers = fieldTextString

    if (!pracTextModifiers['Capital Letters']) {
        textWithModifiers = fieldTextString.toLowerCase();
    }

    let [punc, num, sym] = [
        pracTextModifiers['Punctuation'] ? '' : `;:,.?'"`,
        pracTextModifiers['Numbers'] ? '' : '0-9',
        pracTextModifiers['Symbols'] ? '' : `!@#$%\\^&*()\\[\\]{}\\-+_=/<>`
    ]

    let regex = new RegExp(`[${punc + num + sym}]`, 'g')
    
    textWithModifiers = textWithModifiers.replace(regex, '')

    textWithModifiers = textWithModifiers.replace(/\s{2,}/g, ' ')

    return textWithModifiers
}

export function processSpecializedFieldText(testType, wordCount, fieldTextString, pracTextModifiers) {
    let processedTextString = ''

    processedTextString = applyModifiers(fieldTextString, pracTextModifiers);

    if (testType === 'Word-Count Based' || testType === 'word-count') {
        processedTextString = processedTextString.split(' ').slice(0, wordCount + 1).join(' ');
    }

    return processedTextString
}

// export function autoFocusElement() {
//     const inputRef = useRef(null);
    
//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);
// }


export * from './constants.jsx';