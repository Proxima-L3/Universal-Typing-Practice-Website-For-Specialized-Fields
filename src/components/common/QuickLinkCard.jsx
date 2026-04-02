import {useState, useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

import '/src/App.css';


function QuickLinkCard ({cardText, linkTo}) {

    const navigateTo = useNavigate();

    // const [typingTestChoice, setTypingTestChoice] = useState('timed')


    return (
        <>
            <div className='quickLinkCard' onClick={() => navigateTo(`${linkTo}`)}>
                {cardText}
            </div>
        </>
    )
}

export default QuickLinkCard;