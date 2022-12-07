import React, { useState } from "react";
import InputPassword from "../InputPassword/InputPassword";
import './SignUpForm.css';


const SignUpForm = (props) => {


    return (
        <div className='container'>
            <form className='signUpForm' onSubmit={props.submitSignUp}>
                <label htmlFor='login'>Login</label>
                <input className='input' id='login' autoComplete='off' type="text" value={props.signUpForm.login} onChange={(e) => props.setValue(e, 'login')} />
                <InputPassword
                    signUpForm={props.signUpForm}
                    setValue={props.setValue}
                    passLevel={props.passLevel}
                />
                <label htmlFor='confirmPass'>Confirm password</label>
                <input className='input' id='confirmPass' type="password" value={props.signUpForm.confirmPass} onChange={(e) => props.setValue(e, 'confirmPass')} />
                <div className="underText passmatch">{props.passmatch}</div>
                <label htmlFor='tel'>Telphone number</label>
                <input className='input' id='tel' type="tel" value={props.signUpForm.tel} onChange={(e) => props.setValue(e, 'tel')} />
                <div className="underText passmatch">{props.incorrectNum}</div>
                <button disabled={props.submitDisabled} className='signUpBtn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;