import React from 'react';
import './MoimBoard.css';
import Navbar2 from '../main/Navbar2.js';
import Footer from '../main/Footer.js';
const MoimBoard = () => {
    return (
       <div className='MoimBoard'>
        <div><Navbar2/></div>
        <div className='board_content'>
       <div className='board_boards'>
        <div className="boards_profile">프로필사진</div>
        <div className="boards_title">안녕하세요</div>
        <div className='boards_content'>처음 왔습니다 오늘 날씨가 좋군요 다들 행복한 하루 보내세요</div>
        <div className='boards_writeday'>2022-07-14</div>
        <div className='boards_like'>Like</div>
        <div className='boards_comment'>Comment</div>
        <div className='boards_photo'>업로드한사진</div>
       </div>
        </div>
        <Footer/>
        </div>
    );
};

export default MoimBoard;