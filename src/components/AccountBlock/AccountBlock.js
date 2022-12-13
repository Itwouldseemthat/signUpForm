import React from "react";
import './AccountBlock.css';

const AccountBlock = (props) => {
    return (
        <div className="account">
            <div className="accWrapper">
                <div className="title">Hello, {props.account.login}!</div>
                <button className="logOut" type="submit" onClick={() => props.goToPage('signIn')}>Log Out</button> 
            </div>
        </div>
    )
}


export default AccountBlock;