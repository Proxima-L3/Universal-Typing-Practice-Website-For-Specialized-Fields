import {useState, useRef, useEffect} from 'react';

import '/src/App.css';


function TimerUserInputBox ({setCustomTime}) {

    // useEffect ( () => {
    //     console.log(customTime)
    // }, [customTime, setCustomTime])

    const minsRef = useRef(null);
    const secsRef = useRef(null);

    const handleKeyDown = function (inputEvent) {
        if (!/[0-9]/.test(inputEvent.key) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(inputEvent.key)) {
            inputEvent.preventDefault();
        }
    }

    // truncate to 2 digits
    const handleInput = function (inputEvent, max) {
        let value = inputEvent.target.value;

        if (value.length > 2) {
            value = value.slice(0, 2);
        }

        if (Number(value) > max) {
            value = String(max);
        }

        inputEvent.target.value = value;
    }

    // shift focus to seconds after 2 digits entered
    const handleMinsInput = function (inputEvent) {
        handleInput(inputEvent, 20);
        if (inputEvent.target.value.length >= 2) {
            secsRef.current.focus();
        }
    }
    
    // pad with leading zero
    const handleBlur = function (inputEvent) {
        inputEvent.target.value = inputEvent.target.value.padStart(2, '0');
    }

    const handleFocus = function (inputEvent) {
        inputEvent.target.select();



        // if (inputEvent.target === minsRef.current) {
        //     // setCustomTime(`${String(inputEvent.target.value)}${String(customTime.slice(2, -1))}`);
        //     setCustomTime(String(inputEvent.target.value) + String(customTime.slice(2, -1)));
        //     console.log(customTime);
        // }
        // else if (inputEvent.target === secsRef.current) {
        //     // setCustomTime(`${String(customTime.slice(0, 2))}${String(inputEvent.target.value)}`);
        //     setCustomTime(String(customTime.slice(0, 2)) + String(inputEvent.target.value));
        //     console.log(customTime);
        // }
    }

    const updateCustomTime = function () {
        const mins = minsRef.current.value.padStart(2, '0');
        const secs = secsRef.current.value.padStart(2, '0');
        setCustomTime(`${mins}:${secs}`);
    }


    return (
        <>
            <label htmlFor='timeLimit'>Time Limit: </label>
            <div id='timeLimit' className='timeInputRow'>
                <input 
                    className="timeInput"
                    type="number"
                    min="0"
                    max="60"
                    defaultValue="00"
                    ref={minsRef}
                    onKeyDown={handleKeyDown}
                    onInput={(e) => {
                        handleMinsInput(e);
                        updateCustomTime();
                        }
                    }
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    required
                />
                <span className='timeInputColon'>:</span>
                <input
                    className='timeInput'
                    type="number"
                    min="0"
                    max="59"
                    defaultValue="00"
                    ref={secsRef}
                    onKeyDown={handleKeyDown}
                    onInput={(e) => {
                        handleInput(e, 59);
                        updateCustomTime();
                        }
                    }
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    required
                />
            </div>
        </>
    )
}

export default TimerUserInputBox;