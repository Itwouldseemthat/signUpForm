import React, {useState} from "react";



const InputPassword = (props) => {

    const [showPass, setShowPass] = useState({
        text: 'show',
        type: 'password',
        isShow: false,
    })

    function ClickShow() {
        if (!showPass.isShow) {
            setShowPass({
                text: 'hide',
                type: 'text',
                isShow: true,
            })
        }
        else if(showPass.isShow) {
            setShowPass({
                text: 'show',
                type: 'password',
                isShow: false,
            })
        }
    }

    const [rulesForInput, setRulesForInput] = useState(true)

    function showRules() {
        setRulesForInput(false)
    }

    function hideRules() {
        setRulesForInput(true)
    }


    
    return (
        <div className="inputWrapper">
            <label htmlFor='password'>Password</label>
            <div className="showPass" onClick={ClickShow}>{showPass.text}</div>
            {
            rulesForInput ? <div className="info" onMouseEnter={showRules}>?</div> 
            :
            <ul className="info" onMouseLeave={hideRules}>
                <li>{'- pass must be > 3 characters'}</li>
                <li>- your pass is simple if it contains login or sequence of numbers</li>
                <li>{'- normal pass has length >= 6 and more than 4 unique char'}</li>
                <li>{'- good pass has length >= 8 and more than 6 unique char'}</li>
            </ul>
            }
            <input className='input' id='password' type={showPass.type} value={props.signUpForm.password} onChange={(e) => props.setValue(e, 'password')} />
            <div className="underText" style={{color: props.passLevel.color}}>{props.passLevel.text}</div>
        </div> 
    )
}

export default InputPassword;