import React, {useState, useEffect, useRef} from 'react';
import '../cssFolder/Challenge.css';
import axios from 'axios';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {useNavigate} from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import styled from "styled-components";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ChallengeExample from './ChallengeExample';




const ChallengeForm = () => {
    
    //사진 누르면 인증샷 업로드 file
    const photoInput = useRef();
    const handleClick = () =>{
        photoInput.current.click();
    };

    //챌린지 기간 선택 (date picker)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const ChalDatePicker = styled(DatePicker)`
        width: 300px;
        height: 33.99px;
    `;

    return (
        <div> 
        {/* 전체div */}
            <h1>챌린지 등록</h1>
                {/* 챌린지 등록폼 */}
                <div className="challenge_form" style={{width:'600px'}}>
                        
                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>
                            카테고리
                            <select>
                                    <option disabled selected>카테고리 선택</option>
                                    <option>규칙적인 생활</option>
                                    <option>운동</option>
                                    <option>식습관</option>
                                    <option>마음챙김</option>
                                    <option>취미</option>
                                    <option>셀프케어</option>
                                    </select>
                    </div>
                        
                        
                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>챌린지명
                            <input type="text" className="form-control"
                            style={{width:'300px'}} required placeholder='ex) 매일 7:00am 기상하기'/>
                    </div>    
                        
                        
                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>대표사진
                            <input type="file" className="form-control"
                            style={{width:'250px'}}/>
                    </div>

                        
                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>인증빈도
                            <input type="text" className="form-control" placeholder='매일 하루 한 번' disabled
                            style={{width:'300px'}} required/>
                    </div>
                            
                        
                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>챌린지 기간

                            {/* 달력에서 기간 선택 가능 */}
                            <ChalDatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            locale = { ko }
                            placeholderText="챌린지 시작일과 종료일을 선택해주세요"
                            dateFormat="yyyy년 MM월 dd일"
                            onChange={(update) => {
                            setDateRange(update);
                            }}
                            withPortal/>
                    </div>
                        
                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>최소 예치금
                            
                                <div className='chalDeposit'>
                                <input type="text" className="form-control"
                                style={{width:'50px', display:'inline-block'}} required
                                />&nbsp;만원
                                &nbsp;

                                {/* 예치금 고정 체크하면 전체 disabled */}
                                <label><input type="checkbox"
                                />예치금 고정</label>
                                </div>
                    </div>
                    <div>
                            {/* 에디터 사용 */}
                            <b>챌린지를 소개해주세요</b>
                                <ReactQuill></ReactQuill>
                    </div>

                    <div style={{backgroundColor:'#d5bbdd'}} width='100'>인증샷 예시
                                <div style={{width:'150px', height:'150px',
                                border: '1px solid gray', display:'inline-block'}}>

                                <AddPhotoAlternateIcon sx={{fontSize: '60px'}} onClick={handleClick}/>

                                <input 
                                    type="file"
                                    accept="image/jpg, image/jpeg, image/png"
                                    multiple
                                    ref={photoInput}
                                    style={{display:'none'}}
                                />
                            </div>
                    </div>

                                <div style={{width:'200px', height:'200px',
                            border:'1px solid gray', display:'inline-block', marginLeft:'30px'}}></div>
                                <div style={{width:'150px', height:'150px',
                            border: '1px solid gray', display:'inline-block'}}
                                ><AddPhotoAlternateIcon sx={{fontSize: '60px'}} onClick={handleClick}/></div>
                                <br/><br/>
                                <div style={{width:'200px', height:'200px',
                            border:'1px solid gray', display:'inline-block', marginLeft:'30px'}}></div>
                            
                                <button type="submit" className="btn btn-info">다음</button>
                                {/* 다음 버튼 누르면 미리보기 */}
                    
                </div>
            </div>
    );
};    

export default ChallengeForm;