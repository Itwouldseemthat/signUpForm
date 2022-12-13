import React, { useState } from "react";


const InputTel = (props) => {

    const [rulesForInput, setRulesForInput] = useState(true)

    function showRules() {
        setRulesForInput(false)
    }

    function hideRules() {
        setRulesForInput(true)
    }
    
    return (
        <div className="inputWrapper">
            <label htmlFor='tel'>Telphone number</label>
            <input 
                className='input' 
                placeholder="+375 00 000 00 00" 
                id='tel' 
                type="tel" 
                autoComplete="off"
                value={props.signUpForm.tel} 
                onChange={(e) => props.setValue(e, 'tel')} 
            />
            {
            rulesForInput ? <div className="info" onMouseEnter={showRules}>?</div> 
            :
            <ul className="info" onMouseLeave={hideRules}>
                <li>- phone number must start with +</li>
                <li>- phone number must be 12 digits long</li>
            </ul>
            }
            <div className="underText passmatch">{props.incorrectNum}</div>
        </div>
    )
}


export default InputTel;