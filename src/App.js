import React, { useState } from 'react';
import './App.css';
import AccountBlock from './components/AccountBlock/AccountBlock';
import SignInBlock from './components/SignInBlock/SignInBlock';
import SignUpBlock from './components/SignUpBlock/SignUpBlock';

function App() {

  const [whatToShow, setWhaToShow] = useState('signIn');

  function clickSignIn() {
    setWhaToShow('signIn')
  }

  function clickSignUp() {
    setWhaToShow('signUp')
  }

  function clickLogin() {
    setWhaToShow('account')
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

  return (
    <div className="app">
      {
        whatToShow === 'signUp' ? 
        <SignUpBlock
          clickSignIn={clickSignIn}
          submitSignUp={submitSignUp} 
          dataAccounts={dataAccounts}
        /> 
        : 
        whatToShow === 'signIn' ?
        <SignInBlock
          clickLogin={clickLogin}
          clickSignUp={clickSignUp}
          dataAccounts={dataAccounts}
          setAccount={setAccount}
          account={account}
        />
        :
        <AccountBlock 
          clickSignIn={clickSignIn}
          account={account}
        />
      }
    </div>
  );
}

export default App;
