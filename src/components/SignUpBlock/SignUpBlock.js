import React, {useState} from "react";
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

    function setLogin(e) {
        setSignUpForm({
          ...signUpForm,
          login: e.target.value,
        })
    }
    
    function setPassword(e) {
        setSignUpForm({
          ...signUpForm,
          password: e.target.value,
        })
    }
    
    function setConfirmPass(e) {
        setSignUpForm({
          ...signUpForm,
          confirmPass: e.target.value,
        })
    }
    
    function setTel(e) {
        setSignUpForm({
          ...signUpForm,
          tel: e.target.value,
        })
    }
      
    function submitSignUp() {
        console.log('submit')
    }

    
    return (
        <div className='signUp'>
            <div className='wrapper'>
                <SignUpForm 
                    signUpForm={signUpForm}
                    submitSignUp={submitSignUp}
                    setLogin={setLogin}
                    setPassword={setPassword}
                    setConfirmPass={setConfirmPass}
                    setTel={setTel}

                />
                <SideButtons />
            </div>
        </div>
    )
} 

export default SignUpBlock;