import React, { useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm=()=>{
    const navi = useNavigate();
    const [id,setId] = useState('');
    const [pass, setPass] = useState('');

    const onSubmit=(e)=>{
        e.preventDefault();

        const url=process.env.REACT_APP_SPRING_URL+"member/login";
        axios.post(url, {id,pass})
        .then(res=>{
            if(res.data===0){
                alert("아이디 또는 비밀번호가 맞지 않습니다.")
            }
            else{
                localStorage.loginok="yes";
                localStorage.myid=id;
                window.location.reload(); //새로고침
                //navi("/login"); 
            }
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <table style={{width:'300px',marginLeft:'120px'}}>
                <caption><h3>회원 로그인~~</h3></caption>
                <tbody>
                    <tr>
                        <td width={200}>
                            <input type='text' placeholder="아이디" style={{width:'180px'}} required
                            onChange={(e)=>{  setId(e.target.value);  }}/>
                        </td>
                        <td rowSpan={2}>
                            <button type="submit" style={{width:'100%',height:'80px'}}>로그인</button>
                        </td>
                    </tr>
                    <tr>
                        <td width={200}>
                        <input type='password' placeholder="비밀번호" style={{width:'180px'}} required
                        onChange={(e)=>{  setPass(e.target.value);  }}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default LoginForm;