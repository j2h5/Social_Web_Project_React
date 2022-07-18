import React, { useState, useEffect } from "react";
import '../App.css';
import axios from "axios";

const Logout=()=>{
    const [name,setName] = useState('');

    let username = localStorage.username;

    const initFunc=()=>{
        
        const url=process.env.REACT_APP_SPRING_URL+"member/getname?username="+username;

        axios.get(url)
        .then(res=>{
            setName(res.data); 
        })
    }
    const btnLogout=()=>{
        localStorage.removeItem("loginok");
        localStorage.removeItem("username");
        window.location.reload();
    }

    useEffect(()=>{
        initFunc();
    })

    return (
        <div style={{marginLeft:'100px'}}>
            <b style={{fontSize:'20px'}}>{name}({username})님</b>
            <button type="button"  style={{marginLeft:'30px'}} 
            onClick={btnLogout}>로그아웃</button>
        </div>
    )
}

export default Logout;