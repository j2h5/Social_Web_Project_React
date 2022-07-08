import React, { useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthService from "../service/auth-service";


const LoginForm=()=>{
    const navi = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

          AuthService.login(username, password).then(
            (res) => {
                console.log(res);
            }
          );

      };

    return (
        <div>
            <form onSubmit={handleLogin}>
            <table style={{width:'300px',marginLeft:'120px'}}>
                <caption><h3>회원 로그인~~</h3></caption>
                <tbody>
                    <tr>
                        <td width={200}>
                            <input type='text' placeholder="아이디" style={{width:'180px'}} required
                            onChange={(e)=>{  setUsername(e.target.value);console.log("username:"+username);  }}/>
                        </td>
                        <td rowSpan={2}>
                            <button type="submit" style={{width:'100%',height:'80px'}}>로그인</button>
                        </td>
                    </tr>
                    <tr>
                        <td width={200}>
                        <input type='password' placeholder="비밀번호" style={{width:'180px'}} required
                        onChange={(e)=>{  setPassword(e.target.value);console.log("password:"+password);  }}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default LoginForm;