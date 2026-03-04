import {useRef, useEffect} from 'react';


export const TYPING_PRAC_TEXT_SAMPLE_1 = 'A beginning is the time for taking the most delicate care that the balances are correct. This every sister of the Bene Gesserit knows. To begin your study of the life of Muad\'Dib, then, take care that you first place him in his time: born in the 57th year of the Padishah Emperor, Shaddam IV. And take the most special care that you locate Muad\'Dib in his place: the planet Arrakis. Do not be deceived by the fact that he was born on Caladan and lived his first fifteen years there. Arrakis, the planet known as Dune, is forever his place.';

// A simple regex function that checks if a string has any characters that are alphanumeric or a commonly typed symbol and returns a truthy value. (Less noticeably the function also checks if the string is only 1 character long.. this was done to avoid other func keys like backspace from being considered input text.)
export function isAlphNumSym(str) {
    return /^[a-zA-Z0-9 !@#$%^&*-+_=;:,.<>?'"]{1}$/.test(str);
}

// export function autoFocusElement() {
//     const inputRef = useRef(null);
    
//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);
// }


export * from './constants.jsx';