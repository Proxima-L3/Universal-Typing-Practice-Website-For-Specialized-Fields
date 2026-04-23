// import {useState} from 'react';

import '/src/App.css';


function ShowInsertionPointCheckBox ({isChecked, setIsChecked}) {

    const handleChange = function (event) {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <div className="insertionPointCheckBoxRow">
                <label className="insertionPointStyleCheckBoxLabel" htmlFor="showInsertionPoint">Show Insertion Point</label>
                <input
                    className="insertionPointStyleCheckBox"
                    id="showInsertionPoint"
                    type="checkbox"
                    defaultChecked={isChecked}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default ShowInsertionPointCheckBox;