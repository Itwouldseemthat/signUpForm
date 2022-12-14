import React, { useState } from 'react';
import './App.css';
import AccountBlock from './components/AccountBlock/AccountBlock';
import ForgotPassBlock from './components/ForgotPassBlock/ForgotPassBlock';
import SignInBlock from './components/SignInBlock/SignInBlock';
import SignUpBlock from './components/SignUpBlock/SignUpBlock';

function App() {

  const [whatToShow, setWhaToShow] = useState('signIn');

  function goToPage(page) {
    setWhaToShow(page)
  }

  const [dataAccounts, setDataAccounts] = useState([])

  function submitSignUp(accInfo, event) {
    event.preventDefault();
    dataAccounts.push(accInfo)
    setDataAccounts(...[dataAccounts])
    setWhaToShow('signIn')
    console.log(dataAccounts)
  }

  const [account, setAccount] = useState({})

  const signUpBlock = (
    <SignUpBlock
      goToPage={goToPage}
      submitSignUp={submitSignUp} 
      dataAccounts={dataAccounts}
    /> 
  )

  const signInBlock = (
    <SignInBlock
      goToPage={goToPage}
      dataAccounts={dataAccounts}
      setAccount={setAccount}
      account={account}
    />
  )

  const accountBlock = (
    <AccountBlock 
      goToPage={goToPage}
      account={account}
    />
  )

  const forgotPassBlock = (
    <ForgotPassBlock 
      dataAccounts={dataAccounts}
      setDataAccounts={setDataAccounts}
      goToPage={goToPage}
    />
  )

  const whatToShowBlocksMap = {
    signUp: signUpBlock,
    signIn: signInBlock,
    account: accountBlock,
    forgotPass: forgotPassBlock,
  }

  return (
    <div className="app">
      {
        whatToShowBlocksMap[whatToShow]
      }
    </div>
  );
}

export default App;
