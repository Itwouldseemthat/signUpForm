import React from "react";
import './SignInForm.css'

const SignInForm = (props) => {
    return (
        <div className="container">
            <form className="signInForm" onSubmit={(e) => props.submitSignIn(e)}>
                <label onClick={props.submitSignIn} htmlFor="login">Login</label>
                <input 
                    className="input" 
                    id="login" 
                    autoComplete="off"
                    type="text"
                    value={props.signInForm.login}
                    onChange={(e) => props.setValue(e, 'login')}
                />
                <div className="underText passmatch">{props.underText.login}</div>
                <label htmlFor="password">Password</label>
                <input 
                    className="input" 
                    id="password" 
                    autoComplete="off"
                    type="password"
                    value={props.signInForm.password}
                    onChange={(e) => props.setValue(e, 'password')}
                />
                <div className="underText passmatch">{props.underText.pass}</div>
                <button disabled={props.signInDisabled} className="signInBtn" type="submit">Sign In</button>
            </form>
        </div>
    )
}


export default SignInForm;