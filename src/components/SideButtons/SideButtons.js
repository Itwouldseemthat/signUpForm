import React from "react";
import './SideButtons.css';

const SideButtons = (props) => {
    return (
        <div className='sideBtnsWrapper'>
            <button className='sideBtn' onClick={() => props.goToPage('signIn')}>Back</button>
        </div>
    )
}

export default SideButtons;