import React, { useEffect, useState } from "react";
import SideBtnSignIn from "../SideBtnSignIn/SideBtnSignIn";
import SignInForm from "../SignInForm/SignInForm";


const SignInBlock = (props) => {



    const [signInForm, setSignInForm] = useState({
        login: '',
        password: '',
    })

    function setValue(e, value) {
        signInForm[value] = e.target.value
        setSignInForm({
            ...signInForm
        })
    }

    const [signInDisabled, setSignInDisabled] = useState(true)

    const [underText, setUnderText] = useState({
        login: '',
        pass: '',
    })

    useEffect(() => {
        if (signInForm.login === '' || signInForm.password === '') {
            setSignInDisabled(true)
        }
        else setSignInDisabled(false)
    },[signInForm])

    function submitSignIn(event) {
        event.preventDefault();
        let acc = {};
        props.dataAccounts.forEach(item => {
           if (item.login === signInForm.login) {
            acc = item;
            props.setAccount(item)
           }
        })
        if (acc.login === signInForm.login && acc.password === signInForm.password) {
            props.goToPage('account');
        }
        if (acc.login !== signInForm.login) {
            setUnderText({
                ...underText,
                login: 'account with this login not found',
            });
        }
        if (acc.login === signInForm.login && acc.password !== signInForm.password) {
            setUnderText({
                ...underText,
                pass: 'Wrong password',
            })
        }

    }

    useEffect(() => {
        setUnderText({
            ...underText,
            login: '',
            pass: '',
        })
    },[signInForm])

    return (
        <div className="signUp">
            <div className="wrapper">
                <SignInForm
                    goToPage={props.goToPage}
                    signInForm={signInForm} 
                    setValue={setValue}
                    signInDisabled={signInDisabled}
                    submitSignIn={submitSignIn}
                    underText={underText}
                />
                <SideBtnSignIn goToPage={props.goToPage}/>
            </div>
        </div>
    )
}

export default SignInBlock;