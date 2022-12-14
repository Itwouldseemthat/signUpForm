import React, { useState } from "react";
import './ForgotPassBlock.css'
import ForgotPassForm from "../ForgotPassForm/ForgotPassForm";



const ForgotPassBlock = (props) => {



    return (
        <div className="signUp">
            <div className="wrapper">
                <ForgotPassForm 
                    dataAccounts={props.dataAccounts} 
                    setDataAccounts={props.setDataAccounts}
                    goToPage={props.goToPage}
                />
                <div className='sideBtnWrapp'>
                    <button className='sideBtn' onClick={() => props.goToPage('signIn')}>Back</button>
                </div>
            </div>
        </div>
    )
}


export default ForgotPassBlock;