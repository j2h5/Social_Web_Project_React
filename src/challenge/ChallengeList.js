import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar2 from '../main/Navbar2';
import '../cssFolder/ChallengeList.css';
import { GiFruitBowl, GiNotebook, GiRunningShoe } from "react-icons/gi";

import {FaHandHoldingHeart, FaPalette} from 'react-icons/fa';
import { IoCalendarNumberOutline } from "react-icons/io5";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';//댓

import img1 from '../image/2.PNG';


const ChallengeList = () => {

    const [chal_data, setChal_data] = useState('');
    const navi = useNavigate();

        // 현재 페이지번호 읽어오기
        const {currentPage} = useParams();

        //url 선언
        let chal_pagelistUrl = process.env.REACT_APP_SPRING_URL+"challenge/pagelist?currentPage="+currentPage;
        let chal_listUrl = process.env.REACT_APP_SPRING_URL+"challenge/list";
        let alllistUrl = process.env.REACT_APP_SPRING_URL+"challenge/alllist";
        let chal_photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

        // 시작시 호출되는 함수
        const pageList=()=>{
        axios.get()
        .then(res=>{               // res == response
            setChal_data(res.chal_data);
            console.log(res.chal_data);
        })
    }

    useEffect(()=>{
        pageList();
    },[]);

    return (
        <div className='challenge_list'>
            <Navbar2/>
            <div className="content_container" style={{marginLeft:'315px'}} >
                <div className="row">
                    <select className="select_cate">
                        <option value="class" defaultValue="1">클래스</option>
                        <option value="challenge" defaultValue="2">챌린지</option>
                        <option value="meeting" defaultValue="3">모임</option>
                    </select>
                </div>
                <div className="challenge_name">
                    챌린지
                </div>
                <div className="challenge_cate">
                    <div className="cate">
                        <IoCalendarNumberOutline style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">규칙적인 생활</div>
                    </div>
                    <div className="cate">
                        <GiRunningShoe style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">운동</div>
                    </div>
                    <div className="cate">
                        <GiFruitBowl style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">식습관</div>
                    </div>
                    <div className="cate">
                        <FaHandHoldingHeart style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">마음챙김</div>
                    </div>
                    <div className="cate">
                        <FaPalette style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">취미</div>
                    </div>
                    <div className="cate">
                        <GiNotebook style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">셀프케어</div>
                    </div>
                </div>
                {/* challenge_cate 닫힘*/}
                <div className="search_div">
                    <input type='text' className="search"/>
                    <button className="ch_searchbtn">검색</button>
                </div>
                {/* 최신순 인기순 평점순 */}
                <div className="array_search">
                    <label>
                        <input type='radio' className="radio1"name="theme" />
                        최신순
                    </label>
                    <label style={{marginLeft:'15px'}}>
                        <input type='radio' className="radio1"name="theme"/>
                        인기순
                    </label>
                </div>
                <br/><br/>
                <div className="list_row">
                    <div className='each_challenge'>
                        <img alt="" src={img1} className="listimg"/>
                        
                        <div className='chal_title'>
                            <span className="qweqwe">매주 0.5kg 감량하기</span>
                        </div>

                        <div className="chal_period" style={{marginTop:'0px'}}>
                            <span className="qweqwe">n일동안 하루 한번</span>
                        </div>

                        <div className="chal_like">
                            <span><FavoriteBorderIcon style={{fontSize:'20px', color:'red',height:'20px'}}/></span>
                            <span className="qweqwe">162</span>
                        </div>
                        <div className='chal_cates'>
                            <span className='chal_cate_1'>#건강</span>
                            <span className='chal_cate_1'>#바른습관</span>
                        </div>
                    </div>
                    <div className='each_challenge'>
                        <img alt="" src={img1} className="listimg"/>
                        
                        <div className='chal_title'>
                            <span className="qweqwe">매주 0.5kg 감량하기</span>
                        </div>

                        <div className="chal_period" style={{marginTop:'0px'}}>
                            <span className="qweqwe">n일동안 하루 한번</span>
                        </div>

                        <div className="chal_like">
                            <span><FavoriteBorderIcon style={{fontSize:'20px', color:'red',height:'20px'}}/></span>
                            <span className="qweqwe">162</span>
                        </div>
                        <div className='chal_cates'>
                            <span className='chal_cate_1'>#건강</span>
                            <span className='chal_cate_1'>#바른습관</span>
                        </div>
                    </div>
                </div>

                {/* 페이징 처리 */}
            <div className='ch_list_pagination' style={{width:'700px',textAlign:'center'}}>
                <ul className='pagination'>
                    {
                        (chal_data.startPage>1?
                        <li>
                            <Link to={`/challenge/list/${chal_data.startPage-1}`}>이전</Link>
                        </li>:'')
                        
                    }
                    {
                        chal_data.parr && chal_data.parr.map(n=>{
                            const url="/challenge/list/"+n;
                            return(
                                <li>
                                    <Link to={url}>
                                        <b style={{color:n==currentPage?'red':'black'}}>{n}</b></Link>
                                </li>

                            )
                        })
                    }
                    {
                        (chal_data.endPage<chal_data.totalPage?
                        <li>
                            <Link to={`/challenge/list/${chal_data.endPage+1}`}>다음</Link>
                        </li>:'')
                        
                    }
                </ul>
            </div>
            </div>
            {/* content_container 닫힘 */}
        </div>
        // 전체 div 닫힘
    );
};

export default ChallengeList;