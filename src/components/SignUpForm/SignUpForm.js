import React from "react";
import './SignUpForm.css';


const SignUpForm = (props) => {
    return (
        <div className='container'>
            <form className='signUpForm' onSubmit={props.submitSignUp}>
                <label htmlFor='login'>Login</label>
                <input className='input' id='login' autoComplete='off' type="text" value={props.signUpForm.login} onChange={(e) => props.setLogin(e)} />
                <label htmlFor='password'>Password</label>
                <input className='input' id='password' type="password" value={props.signUpForm.password} onChange={(e) => props.setPassword(e)} />
                <label htmlFor='confirmPass'>Confirm password</label>
                <input className='input' id='confirmPass' type="password" value={props.signUpForm.confirmPass} onChange={(e) => props.setConfirmPass(e)} />
                <label htmlFor='tel'>Telphone number</label>
                <input className='input' id='tel' type="tel" value={props.signUpForm.tel} onChange={(e) => props.setTel(e)} />
                <button className='signUpBtn' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;