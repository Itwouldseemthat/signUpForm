import React, { useState } from "react";
import InputPassword from "../InputPassword/InputPassword";
import InputTel from "../InputTel/InputTel";
import './SignUpForm.css';


const SignUpForm = (props) => {


    return (
        <div className='container'>
            <form className='signUpForm' onSubmit={(e) => props.submitSignUp(props.signUpForm, e)}>
                <label htmlFor='login'>Login</label>
                <input className='input margInp' id='login' autoComplete='off' type="text" value={props.signUpForm.login} onChange={(e) => props.setValue(e, 'login')} />
                <InputPassword
                    signUpForm={props.signUpForm}
                    setValue={props.setValue}
                    passLevel={props.passLevel}
                />
                <label htmlFor='confirmPass'>Confirm password</label>
                <input className='input' id='confirmPass' type="password" value={props.signUpForm.confirmPass} onChange={(e) => props.setValue(e, 'confirmPass')} />
                <div className="underText passmatch">{props.passmatch}</div>
                <InputTel 
                    signUpForm={props.signUpForm}
                    setValue={props.setValue}
                    incorrectNum={props.incorrectNum}
                />
                <button disabled={props.submitDisabled} className='signUpBtn' type='submit'>Sign Up</button>
                <div className="underText space">{props.space}</div>
            </form>
        </div>
    )
}

export default SignUpForm;