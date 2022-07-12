import React from 'react';
import '../cssFolder/MypageForm.css';
import Navbar2 from '../main/Navbar2';



const MypageForm = () => {
    return (
        <div>
            <Navbar2/>
            <div className="mypage_container">
                <div className="mypage_header">     
                    <img src=""></img>
                </div>
                
                <div className="mypage_sidebar">
                    <li>결제 내역</li>
                    <li>나의 찜</li>
                    <li>나의 리뷰</li>
                    <li>모임</li>
                    <li>챌린지</li>
                    <li>클래스</li>
                </div>
                <div className='mypage_profile'>
                    <div className='profile_pic'>
                        사진
                    </div>
                    <div className='profile_info'>
                        이름
                        예치금
                    </div>
                    <div className='profile_buttons'>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </div>

                <div className='mypage_lists'>
                    <div className='mypage_moim_list'>
                        
                    </div>
                    <div className='mypage_chal_list'>
                        하하
                    </div>
                    <div className='mypage_class_list'>
                        호호
                    </div>
                </div>
                {/* 진행중/완료 목록 div */}
            </div>
            {/* container div */}
        </div>
        /* 전체 div 닫힘 */
    );
};

export default MypageForm;