import React, { useEffect, useState } from "react";
import PassForm from "../PassForm/PassForm";
import PhoneForm from "../PhoneForm/PhoneForm";
import './ForgotPassForm.css';


const ForgotPassForm = (props) => {

    const [forgotPassForm, setForgotPassForm] = useState({
        tel: '',
        pass: '',
        confirmPass: '',
    })

    function setValue(e, value) {
        forgotPassForm[value] = e.target.value
        setForgotPassForm({
            ...forgotPassForm
        })
    }

    const [applyDisabled, setApplyDisabled] = useState(true)

    const [passDisabled, setPassDisabled] = useState(true)


    useEffect(() => {
        if (forgotPassForm.tel === '') {
            setApplyDisabled(true)
        }
        else if (forgotPassForm.tel !== '') {
            setApplyDisabled(false)
        }

        if (forgotPassForm.pass === '' || forgotPassForm.confirmPass === '') {
            setPassDisabled(true)
        }
        else if (forgotPassForm.pass !== '' && forgotPassForm.confirmPass !== '') {
            setPassDisabled(false)
        }
    },[forgotPassForm])



    const [showPass, setShowPass] = useState(false)

    const [accountToChange, setAccountToChange] = useState({})

    function applyNumber(e) {
        e.preventDefault()
        let acc = {}
        props.dataAccounts.forEach(item => {
            if (item.tel === forgotPassForm.tel) {
                acc = item;
                setAccountToChange(acc);
            }
        })
        if (acc.tel === forgotPassForm.tel) {
            setShowPass(true)
        }
        if (acc.tel !== forgotPassForm.tel) {
            setUnderText({
                ...underText,
                phone: 'this number is not registered',
            })
        }
    }

    function changePassword(e) {
        e.preventDefault()
        props.dataAccounts.forEach(item => {
            if (item.login === accountToChange.login) {
                item.password = forgotPassForm.pass
            }
        })
        props.setDataAccounts(...[props.dataAccounts])
        props.goToPage('signIn')
    }

    const [underText, setUnderText] = useState({
        phone: '',
        pass: '',
        color: '',
    })


    useEffect(() => {
        let arr = forgotPassForm.tel.split('');
        let correct = '+0123456789';
        arr.forEach(item => {
            if (!correct.includes(item)) {
                setApplyDisabled(true)
                setUnderText({
                    ...underText,
                    phone: 'incorrect number',
                });
            }
            else setUnderText({
                ...underText,
                phone: '',
            })
        })
        if (arr.length !== 13 && arr.length !== 0) {
            setApplyDisabled(true)
            setUnderText({
                ...underText,
                phone: 'incorrect number',
            });
        }
        if (arr[0] !== '+' && arr.length !== 0) {
            setApplyDisabled(true)
            setUnderText({
                ...underText,
                phone: 'incorrect number',
            });
        }
    },[forgotPassForm])



    useEffect(() => {
        let simplepass = `012345678909876543210${accountToChange.login}`;
        let arr = forgotPassForm.pass.split('')
        let set = new Set(arr)
        if (arr.length < 4 && arr.length !== 0) {
            setUnderText({
                ...underText,
                pass: 'password is too short',
                color: 'red'
            })
            setPassDisabled(true)
        }
        if (arr.length >= 4 && arr.length !== 0) {
            setUnderText({
                ...underText,
                pass: 'simple password',
                color: 'rgb(191, 95, 0)'
            })
        }
        if (arr.length >= 6 && set.size >= 4 && arr.length !== 0) {
            setUnderText({
                ...underText,
                pass: 'normal password',
                color: 'yellow'
            })
        }
        if (arr.length >= 8 && set.size >= 6 && arr.length !== 0) {
            setUnderText({
                ...underText,
                pass: 'good password',
                color: 'green'
            })
        }
        if (arr.length >= 4 && simplepass.includes(forgotPassForm.pass)) {
            setUnderText({
                ...underText,
                pass: 'simple password',
                color: 'rgb(191, 95, 0)'
            })
        }
        if (arr.indexOf(' ') !== -1) {
            setPassDisabled(true)
            setUnderText({
                ...underText,
                pass: 'dont use spaces',
                color: 'red',
            })
        }

    },[forgotPassForm])

    const [missmatch, setMissmath] = useState('')

    useEffect(() => {
        if (forgotPassForm.pass !== forgotPassForm.confirmPass) {
            setPassDisabled(true);
            setMissmath('password missmatch')
        }
        if (forgotPassForm.pass === forgotPassForm.confirmPass && forgotPassForm.pass !== '') {
            setMissmath('')
        }
        if (forgotPassForm.confirmPass === '') {
            setMissmath('')
        }
    },[forgotPassForm])


    return (
        <div className="padd">
            <div className="FormsWrapp">
                <PhoneForm 
                    applyNumber={applyNumber}
                    forgotPassForm={forgotPassForm}
                    setValue={setValue}
                    applyDisabled={applyDisabled}
                    underText={underText}
                />
                {
                showPass && <PassForm
                    forgotPassForm={forgotPassForm}
                    setValue={setValue} 
                    passDisabled={passDisabled}
                    changePassword={changePassword}
                    underText={underText}
                    missmatch={missmatch}
                />
                }
            </div>
        </div>
    )
}


export default ForgotPassForm;