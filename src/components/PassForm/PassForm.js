import React from "react";



const PassForm = (props) => {
    return (
        <form className="passForm" onSubmit={(e) => props.changePassword(e)}>
            <div className="passInputs">
                <div className="column">
                    <label htmlFor="pass">New password</label>
                    <input
                        className="input"
                        id="pass"
                        type='password'
                        value={props.forgotPassForm.pass}
                        onChange={(e) => props.setValue(e, 'pass')} 
                    />
                    <div className="underText" style={{color: props.underText.color}}>{props.underText.pass}</div>
                </div>
                <div className="column">
                    <label htmlFor="confirmPass">Confirm password</label>
                    <input
                        className="input"
                        id="confirmPass"
                        type='password'
                        value={props.forgotPassForm.confirmPass}
                        onChange={(e) => props.setValue(e, 'confirmPass')} 
                    />
                    <div className="underText">{props.missmatch}</div>
                </div>
            </div>
            <button disabled={props.passDisabled} className='applyBtn'>Change password</button>
        </form>
    )
}

export default PassForm;