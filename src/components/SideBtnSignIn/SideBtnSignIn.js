import React from "react";
import './SideBtnSignIn.css';

const SideBtnSignIn = (props) => {
    return (
        <div className='sideBtnsWrapp'>
            <button className='sideBtns'>Forgot pass?</button>
            <button className='sideBtns' onClick={() => props.goToPage('signUp')}>Sign Up</button>
        </div>
    )
}

export default SideBtnSignIn;