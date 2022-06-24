import React, { useState,useEffect } from 'react';
import '../App.css';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const BoardDetail=()=>{
    const {num,currentPage}=useParams();
    const [dto,setDto]=useState('');
    const navi=useNavigate();

    //url 선언
    let detailUrl=process.env.REACT_APP_SPRING_URL+"board/detail?num="+num;
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    const getData=()=>{
        axios.get(detailUrl)
        .then(res=>{
            setDto(res.data);
        })
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <table className='table' style={{width:'600px'}}>
                <caption><b><h3>{dto.subject}</h3></b></caption>
                <tbody>
                    <tr>
                        <td>
                            <b>작성자 : {dto.name}</b>
                            <span style={{float:'right',color:'gray'}}>{dto.writeday}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img alt='' src={photoUrl+dto.photo}
                        style={{maxWidth:'400px'}}/>
                        <br/><br/>
                        <pre style={{backgroundColor:'white',border:'none'}}>{dto.content}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td><b style={{color:'gray'}}>조회수 : {dto.readcount}</b></td>
                    </tr>
                    <tr>
                        <button type='button' className='btn btn-info' style={{width:'100px',marginRight:'10px'}}
                        onClick={()=>{
                            navi("/board/form");
                        }}>글쓰기</button>

                        <button type='button' className='btn btn-success' style={{width:'100px',marginRight:'10px'}}
                        onClick={()=>{
                            navi(`/board/list/${currentPage}`);
                        }}>목록</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default BoardDetail;