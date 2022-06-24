import React,{useState,useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const BoardList1 = () => {

    const navi = useNavigate();
    const [data,setData]=useState('');
    

    // 현재 페이지번호 읽어오기
    const {currentPage}=useParams();

    // url 선언
    let pagelistUrl=process.env.REACT_APP_SPRING_URL+"board/pagelist?currentPage="+currentPage;
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    // 시작시 호출되는 함수
    const pageList=()=>{
        axios.get(pagelistUrl)
        .then(res=>{                // res == response
            setData(res.data)
        })
    }

    useEffect(()=>{
        pageList();
    },[currentPage])


    return (
        <div>
            <h3 className='alert alert-info'>
                총 {data.totalCount} 개의 게시글이 있습니다
            </h3>
            <br/>
            <table className='table table-bordered' style={{width:'700px'}}>
                <thead>
                    <tr style={{backgroundColor:'#ddd'}}>
                        <th style={{width:'50px'}}>번호</th>
                        <th style={{width:'400px'}}>제목</th>
                        <th style={{width:'80px'}}>작성자</th>
                        <th style={{width:'50px'}}>조회</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.list && data.list.map((row,idx)=>(
                            <tr>
                                <td>{data.no-idx}</td>
                                <td onClick={()=>{
                                    navi(`/board/detail/${row.num}/${currentPage}`)
                                }} style={{cursor:'pointer'}}>
                                    <img alt='' src={photoUrl+row.photo} className='photo_small'></img>
                                    <b>{row.subject}</b>
                                </td>
                                <td>{row.name}</td>
                                <td>{row.readcount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* 페이징 */}
            <div style={{width:'700px',textAlign:'center'}}>
                <ul className='pagination'>
                    {
                        (data.startPage>1?
                        <li>
                            <Link to={`/board/list/${data.startPage-1}`}>이전</Link>
                        </li>:'')
                        
                    }
                    {
                        data.parr && data.parr.map(n=>{
                            const url="/board/list/"+n;
                            return(
                                <li>
                                    <Link to={url}>
                                        <b style={{color:n==currentPage?'red':'black'}}>{n}</b></Link>
                                </li>

                            )
                        })
                    }
                    {
                        (data.endPage<data.totalPage?
                        <li>
                            <Link to={`/board/list/${data.endPage+1}`}>다음</Link>
                        </li>:'')
                        
                    }
                </ul>
            </div>
        </div>
    );
};

export default BoardList1;