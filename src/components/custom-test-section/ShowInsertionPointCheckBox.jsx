
import '/src/App.css';


function ShowInsertionPointCheckBox () {

    return (
        <>
            <div className="insertionPointCheckBoxRow">
                <label className="insertionPointStyleCheckBoxLabel" htmlFor="showInsertionPoint">Show Insertion Point</label>
                <input className="insertionPointStyleCheckBox" type="checkbox" id="showInsertionPoint" value="show" defaultChecked />
            </div>
        </>
    )
}

export default ShowInsertionPointCheckBox;