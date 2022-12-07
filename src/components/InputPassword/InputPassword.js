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
    
    return (
        <div className="inputWrapper">
            <label htmlFor='password'>Password</label>
            <div className="showPass" onClick={ClickShow}>{showPass.text}</div>
            <input className='input' id='password' type={showPass.type} value={props.signUpForm.password} onChange={(e) => props.setValue(e, 'password')} />
            <div className="underText" style={{color: props.passLevel.color}}>{props.passLevel.text}</div>
        </div> 
    )
}

export default InputPassword;