import React from "react";



const PhoneForm = (props) => {
    return (
        <form className="phoneForm" onSubmit={(e) => props.applyNumber(e)}>
            <div className="column">
                <label htmlFor="tel">Your number</label>
                <input 
                    className="input" 
                    id="tel" 
                    autoComplete="off"
                    type="text"
                    value={props.forgotPassForm.tel}
                    onChange={(e) => props.setValue(e, 'tel')}
                />
                <div className="underText">{props.underText.phone}</div>
            </div>
            <button disabled={props.applyDisabled} className='applyBtn'>Apply</button>
        </form>
    ) 
}


export default PhoneForm;