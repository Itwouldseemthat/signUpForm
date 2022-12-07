import React, {useEffect, useState} from "react";
import './SignUpBlock.css';
import SideButtons from "../SideButtons/SideButtons";
import SignUpForm from "../SignUpForm/SignUpForm";


const SignUpBlock = (props) => {

    const [signUpForm, setSignUpForm] = useState({
        login: '',
        password: '',
        confirmPass: '',
        tel: '',
    })

    function setValue(e, value) {
        signUpForm[value] = e.target.value
        setSignUpForm({
          ...signUpForm
        })
    }
      
    function submitSignUp() {
        console.log('submit')
    }

    const [submitDisabled, setSubmitDisabled] = useState(true)

    useEffect(() => {
        if (signUpForm.login === '' || signUpForm.password === '' || signUpForm.confirmPass === '' || signUpForm.tel === '') {
            setSubmitDisabled(true)
        }
        else if (signUpForm.login !== '' && signUpForm.password !== '' && signUpForm.confirmPass !== '' && signUpForm.tel !== '') {
            setSubmitDisabled(false)
        }
    }, [signUpForm])


    const [passmatch, setPassmatch] = useState('')

    useEffect(() => {
        if (signUpForm.password !== signUpForm.confirmPass) {
            setSubmitDisabled(true);
            setPassmatch('password missmatch');
        }
        else if (signUpForm.password === signUpForm.confirmPass && signUpForm.password !== '') {
            setPassmatch('');
        }
    },[signUpForm.confirmPass, signUpForm.password])

    const [passLevel, setPassLevel] = useState({
        text: '',
        color: '',
    })

    useEffect(() => {
        let simplepass = `012345678909876543210${signUpForm.login}`;
        let arr = signUpForm.password.split('')
        let set = new Set(arr)
        if (arr.length < 4 && arr.length !== 0) {
            setPassLevel({
                ...passLevel,
                text: 'password is too short',
                color: 'red'
            })
            setSubmitDisabled(true)
        }
        if (arr.length >= 4 && arr.length !== 0) {
            setPassLevel({
                ...passLevel,
                text: 'simple password',
                color: 'rgb(191, 95, 0)'
            })
        }
        if (arr.length >= 6 && set.size >= 4 && arr.length !== 0) {
            setPassLevel({
                ...passLevel,
                text: 'normal password',
                color: 'yellow'
            })
        }
        if (arr.length >= 8 && set.size >= 6 && arr.length !== 0) {
            setPassLevel({
                ...passLevel,
                text: 'good password',
                color: 'green'
            })
        }
        if (arr.length >= 4 && simplepass.includes(signUpForm.password)) {
            setPassLevel({
                ...passLevel,
                text: 'simple password',
                color: 'rgb(191, 95, 0)'
            })
        }

    },[signUpForm.password, signUpForm.login])


    const [incorrectNum, setIncorrectNum] = useState('')

    useEffect(() => {
        let arr = signUpForm.tel.split('');
        let correct = '+0123456789';
        arr.forEach(item => {
            if (!correct.includes(item)) {
                setSubmitDisabled(true);
                setIncorrectNum('incorrect number');
            }
            else setIncorrectNum('')
        })
        if (arr.length !== 13 && arr.length !== 0) {
            setSubmitDisabled(true);
            setIncorrectNum('incorrect number');
        }
    },[signUpForm.tel])


    
    return (
        <div className='signUp'>
            <div className='wrapper'>
                <SignUpForm 
                    submitDisabled={submitDisabled}
                    signUpForm={signUpForm}
                    submitSignUp={submitSignUp}
                    setValue={setValue}
                    passmatch={passmatch}
                    passLevel={passLevel}
                    incorrectNum={incorrectNum}
                />
                <SideButtons />
            </div>
        </div>
    )
} 

export default SignUpBlock;