import { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import '/src/App.css';


function CustomTestOptionsAccordion ({accordionSectionOpen, setAccordionSectionOpen}) {

    const location = useLocation();
    
    useEffect(() => {
        if (location.state?.openCustomSection) {
            setAccordionSectionOpen(true);
        }
    }, []);

    const customTestSectionRef = useRef();
    
    useEffect(() => {
        if (accordionSectionOpen && location.state?.openCustomSection) {
            customTestSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [accordionSectionOpen]);

    // checks if accordion component is clicked
    const updateAccordionStatus = function () {
        if (accordionSectionOpen) {
            setAccordionSectionOpen(false);
        }
        else {
            setAccordionSectionOpen(true);
        }
    }

    return (
        <>
            <div className='customTestOptionsAccordion' onClick={updateAccordionStatus} ref={customTestSectionRef} >
                <IoIosArrowForward className={`arrowIcon ${ accordionSectionOpen ? 'accordionToggle' : '' }`} />
                Custom Test Options
                <IoIosArrowBack className={`arrowIcon ${ accordionSectionOpen ? 'accordionToggle' : '' }`} />
            </div>
        </>
    )
}

export default CustomTestOptionsAccordion;