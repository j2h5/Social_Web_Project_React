import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar2 from '../main/Navbar2';
import '../cssFolder/ChallengeList.css';
import { GiFruitBowl, GiNotebook, GiRunningShoe } from "react-icons/gi";

import ClassList from '../class/ClassList';
import MoimList from '../moim/MoimList';
//import ChallengeList from '../challenge/ChallengeList';

import {FaHandHoldingHeart, FaPalette} from 'react-icons/fa';
import { IoCalendarNumberOutline } from "react-icons/io5";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';//댓

import img1 from '../image/2.PNG';
import createTypography from '@material-ui/core/styles/createTypography';


const ChallengeList = () => {

    const [data, setData] = useState([]); //기존 데이터를 저장하고 있는 상태
    const [filterData, setFilterData] = useState([]);
    const[category, setCategory] = useState();

    const navi = useNavigate();

    const onChangeCategory = ({ currentTarget }) => {
        setCategory(currentTarget.value);
    }

    // 현재 페이지번호 읽어오기
    const {currentPage} = useParams();

    //url 선언
    let chal_pagelistUrl = process.env.REACT_APP_SPRING_URL+"challenge/pagelist?currentPage="+currentPage;
    let chal_photoUrl=process.env.REACT_APP_SPRING_URL+"save/";
        
        // 시작시 호출되는 함수
        const pageList=()=>{
            axios.get(chal_pagelistUrl)
            .then(res=>{               // res == response
                setData(res.data.list);
                setFilterData(res.data.list);
            })
        }
        
        useEffect(()=>{
            pageList();
        },[currentPage]);

        useEffect(() => {
            const newData = data.filter((a) => a.ch_category === category);
            setFilterData(newData);
        }, [category]);
    
    return (
        <div className='challenge_list'>
            <Navbar2/>
            <div className="content_container" style={{marginLeft:'315px'}} >
                <div className="row">
                    <select className="select_cate">
                        <option>클래스</option>
                        <option selected>챌린지</option>
                        <option>모임</option>
                    </select>

                </div>
                <div className="challenge_name">
                    챌린지
                </div>
                <div className="challenge_cate">
                    <button type="button" className="cate"
                    onClick={onChangeCategory} value="규칙적인 생활">
                        <IoCalendarNumberOutline style={{ fontSize:'80px'}}/>
                        <div className="catetext">규칙적인 생활</div>
                    </button>
                    <button type="button" className="cate"
                    onClick={onChangeCategory} value="운동">
                        <GiRunningShoe style={{ fontSize:'80px'}}/>
                        <div className="catetext">운동</div>
                    </button>
                    <button type="button" className="cate"
                    onClick={onChangeCategory} value="식습관">
                        <GiFruitBowl style={{ fontSize:'80px'}}/>
                        <div className="catetext">식습관</div>
                    </button>
                    <button type="button" className="cate"
                    onClick={onChangeCategory} value="마음챙김">
                        <FaHandHoldingHeart style={{ fontSize:'80px'}}/>
                        <div className="catetext">마음챙김</div>
                    </button>
                    <button type="button" className="cate"
                    onClick={onChangeCategory} value="취미">
                        <FaPalette style={{ fontSize:'80px'}}/>
                        <div className="catetext">취미</div>
                    </button>
                    <button type="button" className="cate"
                    onClick={onChangeCategory} value="셀프케어">
                        <GiNotebook style={{ fontSize:'80px'}}/>
                        <div className="catetext">셀프케어</div>
                    </button>
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
                    
                    {/* 하나의 카드 반복문 */}
                    {filterData && filterData.map((div,idx)=>(
                    <div className='each_challenge' key={idx}>
                        <img alt="" src={chal_photoUrl + div.ch_title_photo} className="listimg"/>
                        
                        <div className='chal_title'>
                            <span className="qweqwe">{div.ch_title}</span>
                        </div>

                        <div className="chal_period" style={{marginTop:'0px'}}>
                            <span className="qweqwe">n일동안 하루 한번</span>
                        </div>

                        <div className="chal_like">
                            <span><FavoriteBorderIcon style={{fontSize:'20px', color:'red',height:'20px'}}/></span>
                            <span className="qweqwe">162</span>
                        </div>
                        <div className='chal_cates'>
                            <span className='chal_cate_1'>{div.ch_category}</span>
                            <span className='chal_cate_1'>#바른습관</span>
                        </div>
                    </div>
                        )) }
                </div>

                {/* 페이징 처리 */}
            <div className='ch_list_pagination' style={{width:'700px',textAlign:'center'}}>
                <ul className='pagination'>
                    {
                        (data.startPage>1?
                        <li>
                            <Link to={`/challenge/list/${data.startPage-1}`}>이전</Link>
                        </li>:'')
                        
                    }
                    {
                        data.parr && data.parr.map(n=>{
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
                        (data.endPage < data.totalPage?
                        <li>
                            <Link to={`/challenge/list/${data.endPage+1}`}>다음</Link>
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