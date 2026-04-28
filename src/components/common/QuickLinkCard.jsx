import {useState, useEffect} from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import '/src/App.css';


function QuickLinkCard ({className, cardText, linkTo, typingTestChoice, testTime, testWords}) {

    // below not needed here. useSearchParams is only needed when you want to grab url param values or responsively set them while on the current page (meaning no page refreshes or navigating to different page)
    // const [searchParams, setSearchParams] = useSearchParams({ testChoice: typingTestChoice });
    const navigateTo = useNavigate();

    // const [typingTestChoice, setTypingTestChoice] = useState('timed')

    const goToUserTestChoice = function() {
        // let newUrl = linkTo
        // console.log(searchParams.get('testChoice'))
        // console.log(setSearchParams({ testChoice: typingTestChoice }))
        console.log('...............')
        console.log(linkTo)
        // console.log(linkTo + searchParams)
        // console.log(navigateTo(linkTo + searchParams))
        // setSearchParams({ testChoice: typingTestChoice })
        // searchParams.set()
        // navigateTo(linkTo + typingTestChoice)
        navigateTo(`${linkTo}?testChoice=${typingTestChoice}&testTime=${testTime}&testWords=${testWords}`);
    }

    return (
        <>
            {/* <div className='quickLinkCard' onClick={() => navigateTo(`${linkTo}`)}>
                {cardText}
            </div> */}
            
            <div className={`quickLinkCard ${className || ''}`} onClick={goToUserTestChoice}>
                {cardText}
            </div>
        </>
    )
}

export default QuickLinkCard;