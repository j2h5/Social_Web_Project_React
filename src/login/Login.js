import React from "react";
import '../App.css';
import LoginForm from "./LoginForm";
import Logout from "./Logout";

const Login=()=>{
    let loginok = localStorage.loginok;

    return (
        <div>
            {
                loginok == null ? <LoginForm/> : <Logout/>
            }
        </div>
    )
}

export default Login;