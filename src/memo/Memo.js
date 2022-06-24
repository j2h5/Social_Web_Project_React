import React,{useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RowMemoItem from "./RowMemoItem";


const Memo=()=>{
    //.env 전역변수 사용 
    const SPRING_URL=process.env.REACT_APP_SPRING_URL;

    //백엔드에서 받아올 리스트 데이터 변수 
    const [memolist,setMemolist]=useState([]);

    //보내는 변수
    const [nickname,setNickname]=useState('');
    const [message,setMessage]=useState('');

    //페이지 이동 함수 
    const Navi=useNavigate();
    let insertUrl=SPRING_URL+"memo/insert";
    let url=SPRING_URL+"/memo/list";
    
    //데이터 가져오는 함수 
    const list=()=>{

        let url="http://localhost:9001/memo/list";
        axios.get(url)
        .then(res=>{
            setMemolist(res.data);
            console.log("len="+res.data.length);
        })
    }

    //메세지 입력 
    const onInsert=(e)=>{
        if(e.key==='Enter')
        {
            axios.post(insertUrl,{nickname,message})
            .then(res=>{
                // window.location.replace("/memo");
                window.location.reload(); //새로고침
            })
        }

    }

    //처음 랜더링시 한번 데이터 가져오기 
    useEffect(()=>{
        list();
    },[]);

    return(
        <div>
            <h2>Memo</h2>
            <hr/>
            <div className="m_table">
                        <input type='text' style={{width:'200px',height:'50px',marginRight:'20px',textAlign:'center'}} placeholder="닉네임" 
                        onChange={(e)=>{
                            setNickname(e.target.value);
                        }}></input>
    
                        <input type='text' style={{width:'400px',height:'50px',textAlign:'center'}} placeholder="메세지 입력후 엔터를 누르세요" onKeyUp={onInsert}
                        onChange={(e)=>{
                            setMessage(e.target.value);
                        }}></input>
                <br/>
            <table className="m_result">
                <tr>
                    <td>
                        <th style={{width:'200px'}}>닉네임</th>
                    </td>
                    <td>
                        <th style={{width:'300px'}}>메세지</th>
                    </td>
                    <td>
                        <th style={{width:'200px'}}>작성일</th>
                    </td>
                </tr>
                    {
                        memolist.map((row,idx)=>(
                            <RowMemoItem key={idx} row={row} idx={idx}/>
                        ))
                    }
            </table>
            </div>
        </div>
    )
}

export default Memo;