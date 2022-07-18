import React from "react";
import '../App.css';
import LoginForm1 from "./LoginForm1";
import Logout from "./Logout";

const Login=()=>{
    let loginok = localStorage.loginok;

    return (
        <div>
            {
                loginok == null ? <LoginForm1/> : <Logout/>
            }
        </div>
    )
}

export default Login;