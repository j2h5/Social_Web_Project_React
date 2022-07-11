import React from 'react';
import './MoimList.css';
import { GiMicrophone,GiThreeFriends,GiFruitBowl, GiNotebook,GiRunningShoe } from "react-icons/gi";
import {FaHandHoldingHeart, FaPalette} from 'react-icons/fa';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Navbar, Navbar2 } from '../main';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';//댓

import img1 from '../image/2.PNG';


const MoimList = () => {
    return (
        <div className='moim_list'>
            <div><Navbar2/></div>
            <div className="moim_list_content" style={{marginLeft:'315px'}} >
                <div className="row">
                    <select className="select_cate" >
                        <option value="class">클래스</option>
                        <option value="challenge">챌린지</option>
                        <option value="meeting">모임</option>
                    </select>
                </div>
                <div className="moim_name">
                   모임
                </div>
                <div className="moim_cate">
                    <div className="cate">
                        <GiMicrophone style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">문화공연</div>
                    </div>
                    <div className="cate">
                        <GiRunningShoe style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">운동</div>
                    </div>
                    <div className="cate">
                        <GiThreeFriends style={{ fontSize:'80px', marginLeft:'45px', marginTop:'23px'}}/>
                        <div className="catetext">사교인맥</div>
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
                        <div className="catetext">공부</div>
                    </div>
                </div>
                {/* moim_cate 닫힘*/}
                <div className="search_div">
                    <input type='text' className="search"/>
                    <button className="searchbtn">검색</button>
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
                    <label style={{marginLeft:'15px'}}>
                        <input type='radio' className="radio1"name="theme"/>
                        평점순
                    </label>
                </div>
                <br/><br/>
                <div className="list_row">
                    <div className='each_moim'>
                        <img alt="" src={img1} className="listimg"/>
                        
                        <div className='moim_title'>
                            <span className="qweqwe">매주 0.5kg 감량하기</span>
                        </div>

                        <div className="moim_period" style={{marginTop:'0px'}}>
                            <span className="qweqwe">n일동안 하루 한번</span>
                        </div>

                        <div className="moim_like">
                            <span><FavoriteBorderIcon style={{fontSize:'20px', color:'red',height:'20px'}}/></span>
                            <span className="qweqwe">162</span>
                        </div>
                        <div className='moim_cates'>
                            <span className='moim_cate_1'>#건강</span>
                            <span className='moim_cate_1'>#바른습관</span>
                        </div>
                    </div>
                    <div className='each_moim'>
                        <img alt="" src={img1} className="listimg"/>
                        
                        <div className='moim_title'>
                            <span className="qweqwe">매주 0.5kg 감량하기</span>
                        </div>

                        <div className="moim_period" style={{marginTop:'0px'}}>
                            <span className="qweqwe">n일동안 하루 한번</span>
                        </div>

                        <div className="moim_like">
                            <span><FavoriteBorderIcon style={{fontSize:'20px', color:'red',height:'20px'}}/></span>
                            <span className="qweqwe">162</span>
                        </div>
                        <div className='moim_cates'>
                            <span className='moim_cate_1'>#건강</span>
                            <span className='moim_cate_1'>#바른습관</span>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default MoimList;