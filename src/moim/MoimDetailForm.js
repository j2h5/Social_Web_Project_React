import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './MoimDetailForm.css';
import { useNavigate} from 'react-router-dom';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import kyungdae from './images/kyungdae.png';
import bori from './images/bori.png';
import {Navbar2 } from '../main';


const MoimDetailForm = () => {
    const [dto,setDto]=useState('');
    const navigate = useNavigate();
    const navigateToMoimLIst = () =>{
        navigate('/moim/list')
    };

    let detailUrl=process.env.REACT_APP_SPRING_URL+"moim/detailform/:num";
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
           <div><Navbar2/></div> 
          
            <div className='moimdetail_content'>
                <div className='moimdetail_top'> 
               <div className='moimdetail_thumbnail'>
                <img className='image-thumbnail' alt ='' src={kyungdae} style={{width:'100%',height:'100%',objectFit:'fill',borderRadius:'15px'}}/>
            
                 </div>
               
               {/* <div className='moimdetail_title'>제목</div>
               <div className='moimdetail_people'>현재인원/모집정원</div>
               <div className='moimdetail_date'>날짜</div>
                <div className='moimdetail_place'>장소</div>
            */}
                
            
                <div className='con_box'>
                    <ul className='con_box_list'>
                    <li style={{borderBottom:'1px solid silver'}}>
                            <b class='con_box_list_compo'>
                                카테고리:   {dto.moim_cate}
                            </b>
                        </li>
                        <li style={{borderBottom:'1px solid silver'}}>
                            <b class='con_box_list_compo'>
                                제목:   {dto.moim_name}
                            </b>
                        </li>
                        <li style={{borderBottom:'1px solid silver'}}>
                            <b class='con_box_list_compo'>
                                인원/정원: {dto.moim_count}
                            </b>
                        </li>
                        <li style={{borderBottom:'1px solid silver'}}>
                            <b class='con_box_list_compo'>
                                장소:   {dto.moim_place}
                            </b>
                        </li>
                        <li style={{borderBottom:'1px solid silver'}}>
                            <b class='con_box_list_compo'>
                                날짜:   {dto.moim_writeday}
                            </b>
                        </li>
                        <li style={{borderBottom:'1px solid silver'}}>
                            <b class='con_box_list_compo'>
                                방장:   {dto.moim_leader}
                            </b>
                        </li>
                    </ul>
                </div>
                <div className='buttons'>
                <button type="button" class="btn btn-light" id="join">참여하기</button>
                <button type="button"  onClick={navigateToMoimLIst} class="btn btn-light" id="list">목록</button>
                </div>
                </div>  {/* top */}
            
            <div className='moimdetail_mid'>
                <h2 style={{marginLeft:'40px',marginBottom:'50px'}}>모임 활동 사진</h2>
            <div class="image_table">
            <ul>
		<li>
			<a href="#">
				<div class="screen"><img src={img1} alt=''/></div>
				
			</a>
		</li>
		<li>
			<a href="#">
				<div class="screen"><img src={img2} alt=''/></div>
				
			</a>
		</li>
		<li>
			<a href="#">
				<div class="screen"><img src={img3} alt=''/></div>
				
			</a>
		</li>
		
	</ul>
            </div> {/* imgtable */}
           
            <div className='moim_explain' style={{marginTop:'70px'}}>
            <h2 style={{marginLeft:'40px'}}>모임 소개</h2>
                <div className='moim_explain_content'>
                    샬라샬라
                </div>
                <div className='member_list' style={{marginTop:'100px'}}>
              <h2 style={{marginLeft:'40px'}}>참여중인 멤버</h2>
                <div className='member_member'>
                <img  className='member_image' src={bori} alt=''/>
                <div className='member_name'>
                    <h3>보리</h3>
                </div>
                </div> {/*member_member*/}

                </div>
            </div>
            </div>{/* mid */}
     
        </div> {/* content */}

        </div> 

    );
};

export default MoimDetailForm;