import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login_css/LoginForm.css';
import AuthService from '../service/auth-service';

const LoginForm = () => {
    const navi = useNavigate();
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit=(e)=>{
        e.preventDefault();

        const url=process.env.REACT_APP_SPRING_URL+"api/authenticate";

        AuthService.login(username, password).then(
            (res) => {
                console.log(res);
                localStorage.loginok="yes";
                localStorage.username=username;
                window.location.reload(); //새로고침
                //navi("/login"); 
            }
        );

        // axios.post(url, {username,password})
        // .then(res=>{
        //     if(res.data===0){
        //         alert("아이디 또는 비밀번호가 맞지 않습니다.")
        //     }
        //     else{
        //         localStorage.loginok="yes";
        //         localStorage.username=username;
        //         window.location.reload(); //새로고침
        //         //navi("/login"); 
        //     }
        // })
    }

    return (
        <div className='container'>
        <div className='wrapper'>
            <div className='login-form'>
            <h1>테스트 로그인 페이지</h1>
            <form onSubmit={onSubmit}>
                <div className='int-area'>
                    <input type="text" name="username" id="username" autoComplete='off' required onChange={(e)=>{  setUsername(e.target.value);  }}/>
                    <label>USER NAME</label>
                </div>
                <div className='int-area'>
                    <input type="password" name="password" id="password" autoComplete='off' required onChange={(e)=>{  setPassword(e.target.value);  }}/>
                    <label>PASSWORD</label>
                </div>
                <div className='btn-area'>
                    <button type='submit'>LOGIN</button>
                </div>
                <div className='caption'>
                    <a href='/'>Forgot Password?</a>
                </div>
            </form>
        </div>{/* login-form */}
        </div>{/* wrapper */}
        </div>
    );
};

export default LoginForm;