import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DataArray } from "@mui/icons-material";

const BoardForm=()=>{
    const [photo, setPhoto] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    //url 선언
    let uploadUrl = process.env.REACT_APP_SPRING_URL+"board/upload";
    let insertUrl = process.env.REACT_APP_SPRING_URL+"board/insert";
    let photoUrl = process.env.REACT_APP_SPRING_URL+"save/";

    const navi = useNavigate();
    let loginok = localStorage.loginok;
    let id = localStorage.myid;

    const initFunc=()=>{
        if(loginok==null){
            alert("먼저 로그인 하세요");
            navi("/login")
        }
    }

    //이미지 업로드 
    const imageUpload = (e) => {
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile);

        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data);
        })
    }

    //submit 이벤트
    const onBoardInsert=(e)=>{
        e.preventDefault();

        axios.post(insertUrl, { id, photo, subject, content})
        .then(res=>{
            navi("/board/list/1");
        })
    }


    useEffect(()=>{
        initFunc();
    },[]);

    return(
        <div>
            <form onSubmit={onBoardInsert}>
            <img alt="" src={photoUrl+photo} className="imgphoto"/>
            <h1>BoardList</h1>
            <table style={{width:'400px'}}>
                <caption><h3>게시판 글쓰기</h3></caption>
                <tbody>
                    <tr>
                        <th style={{backgroundColor:"#ddd",width:'120px'}}>아이디</th>
                        <td>&nbsp;&nbsp;{id}</td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"#ddd"}}>이미지</th>
                        <td><input type='file' onChange={imageUpload}/></td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor:"#ddd"}}>제목</th>
                        <td><input type='text' required 
                        onChange={(e)=>{  setSubject(e.target.value); }}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <textarea required style={{width:'400px',height:'120px'}} 
                            onChange={(e)=>{  setContent(e.target.value); }}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">게시글저장</button>
                            <button type="button" onClick={()=>{
                                navi("/board/list/1")
                            }}>게시판 메인</button>
                        </td> 
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default BoardForm;
