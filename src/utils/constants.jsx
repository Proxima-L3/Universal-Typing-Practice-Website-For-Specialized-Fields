import {useRef, useEffect} from 'react';


export const TYPING_PRAC_TEXT_SAMPLE_1 = 'A beginning is the time for taking the most delicate care that the balances are correct. This every sister of the Bene Gesserit knows. To begin your study of the life of Muad\'Dib, then, take care that you first place him in his time: born in the 57th year of the Padishah Emperor, Shaddam IV. And take the most special care that you locate Muad\'Dib in his place: the planet Arrakis. Do not be deceived by the fact that he was born on Caladan and lived his first fifteen years there. Arrakis, the planet known as Dune, is forever his place.';

export const TYPING_PRAC_TEXT_SAMPLE_2 = 'Postoperative care is equally critical, involving wound management, bandaging, pain assessment, and client education regarding home care instructions, nutrition, and follow-up appointments. Preventative care is a major component of veterinary medicine, so vet techs frequently educate pet owners about parasite control, heartworm prevention, dental prophylaxis, and vaccination schedules to promote long-term animal health. Laboratory duties often include running diagnostics such as urinalysis, fecal exams, cytology, and hematology, requiring familiarity with microscopes, centrifuges, and in-house analyzers to identify pathogens, parasites, or abnormalities in blood chemistry.';

// A simple regex function that checks if a string has any characters that are alphanumeric or a commonly typed symbol and returns a truthy value. (Less noticeably the function also checks if the string is only 1 character long.. this was done to avoid other func keys like backspace from being considered input text.)
export function isAlphNumSym(str) {
    return /^[a-zA-Z0-9 !@#$%^&*()-+_=;:,./<>?'"]{1}$/.test(str);
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