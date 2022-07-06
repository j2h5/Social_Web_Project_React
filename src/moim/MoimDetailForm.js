import React from 'react';
import './MoimDetailForm.css'
import { NavLink } from 'react-router-dom';
import slide01 from './images/slide01.jpg';
import slide02 from './images/slide02.jpg';
import slide03 from './images/slide03.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import bori from './images/bori.png';
import { Navbar } from '../main';
const MoimDetailForm = () => {
    return (
        <div>
           <div><Navbar/></div> 
            <div className='moimdetail_content'>
                <div className='moimdetail_top'> 
               <div className='moimdetail_thumbnail'>
                <img className='image-thumbnail' alt ='' src={img3} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            
                 </div>
               
               {/* <div className='moimdetail_title'>제목</div>
               <div className='moimdetail_people'>현재인원/모집정원</div>
               <div className='moimdetail_date'>날짜</div>
                <div className='moimdetail_place'>장소</div>
                
                <div className='buttons'>
                <button className='join'>참여하기</button>
                <button className='list'>목록</button>
                </div> */}
                <div className='conn_box'>
                    <ul className='con_box_list'>
                        <li>
                            <b class='con_box_list_compo'>
                            제목
                            </b>
                        </li>
                        <li>
                            <b class='con_box_list_compo'>
                                인원/정원
                            </b>
                        </li>
                        <li>
                            <b class='con_box_list_compo'>
                                장소
                            </b>
                        </li>
                        <li>
                            <b class='con_box_list_compo'>
                                몰라
                            </b>
                        </li>
                    </ul>
                </div>
                </div>  {/* top */}
            
            <div className='moimdetail_mid' style={{marginTop:'50px'}}>
                <h2 style={{marginLeft:'40px'}}>모임 사진</h2>
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
            <h2 style={{marginLeft:'40px'}}>모임 소개</h2>
            <div className='moim_explain'>
                <div className='moim_explain_content'>
                    샬라샬라
                </div>
              <h2 style={{marginLeft:'40px'}}>참여중인 멤버</h2>
                <div className='member_list'>
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