import React, {useState, useEffect, useRef} from 'react';
import '../cssFolder/ChallengeForm.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Editor from '../class/EditorWithUseQuill';
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DatePicker from 'react-datepicker';
import ChallengeExample from './ChallengeExample';
import styled from "styled-components";
import { ko } from 'date-fns/esm/locale';
import Navbar2 from '../main/Navbar2';
import Button from '@mui/material/Button';
//import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import form1 from './images/px.jpg'
import { useScrollClipPath } from '../hooks';

//url 등록
    let insertUrl = process.env.REACT_APP_SPRING_URL+"challenge/insert";
    let uploadUrl = process.env.REACT_APP_SPRING_URL+"challenge/upload";
    let photoUrl = process.env.REACT_APP_SPRING_URL+"save/";


const ChallengeForm = () => {

    const navi = useNavigate();

    const[ch_category, setCh_category] = useState('규칙적인 생활');
    const[ch_title, setCh_title] = useState('');
    const[ch_title_photo, setCh_title_photo] = useState('');
    const[ch_content, setCh_content] = useState('');
    const[ch_deposit, setCh_deposit] = useState('1');
    const[ch_exphoto1, setCh_exphoto1] = useState('');
    const[ch_exphoto2, setCh_exphoto2] = useState('');
    const[ch_startday, setCh_startday] = useState('');
    const[ch_endday, setCh_endday] = useState('');
    const[ch_period, setCh_period] = useState('');
    const[ch_status, setCh_status] = useState('');


    const Input = styled('input')({
        display: 'none',
    });

    //추가하는 함수 이벤트
    const onInsert = () =>{
        axios.post(insertUrl, { ch_category, ch_title, ch_title_photo, ch_content, ch_deposit, ch_exphoto1, ch_exphoto2} )
        .then(res=>{
            //insert 성공 후 처리할 코드들
            alert("집에가!!")
            
            //목록으로 이동
            //navi("/challenge/list");
        })
    }

    //이미지 업로드 
    const imageUpload = (e) => {
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile);

        axios({
            method:'post',
            url: uploadUrl,
            data: imageFile,
            headers:{'content-Type':'multipart/form-data'}
        }).then(res=>{
            setCh_title_photo(res.data); //백엔드에서 보낸 변경된 이미지명을 ch_title_photo 변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }

        //이미지 업로드 2
        const imageUpload2 = (e) => {
            const uploadFile = e.target.files[0];
            const imageFile = new FormData();
            imageFile.append("uploadFile", uploadFile);
    
            axios({
                method:'post',
                url: uploadUrl,
                data: imageFile,
                headers:{'content-Type':'multipart/form-data'}
            }).then(res=>{
                setCh_exphoto1(res.data);
            }).catch(err=>{
                alert(err);
            });
        }
        //이미지 업로드 3
        const imageUpload3 = (e) => {
            const uploadFile = e.target.files[0];
            const imageFile = new FormData();
            imageFile.append("uploadFile", uploadFile);

            axios({
                method:'post',
                url: uploadUrl,
                data: imageFile,
                headers:{'content-Type':'multipart/form-data'}
            }).then(res=>{
                setCh_exphoto2(res.data); 
            }).catch(err=>{
                alert(err);
            });
    }
    
    //가격제한
    const moneymin = 1;
    const moneymax = 10;
    //const [ch_deposit, setCh_deposit] = useState('');
    const moneyChange = event => {
        const value = Math.max(moneymin, Math.min(moneymax, Number(event.target.value)));
        setCh_deposit(value);
    };

    // 미리보기/수정 버튼 관련
    const [show, setShow] = useState(false);

    //사진 누르면 인증샷 업로드 file
    const photoInput = useRef();
    const handleClick = () =>{
        photoInput.current.click();
    };

    const S={
        Image: styled.div`
        width: 1300px;
        height: 600px;
        top:300px;
        background: no-repeat center/cover url(${form1});
        `
    }

    const animatedImage = useScrollClipPath();

    return (
        <div className='container'> {/* 전체div */}
            <Navbar2/>
                {/* 챌린지 등록폼 */}
                <form onSubmit={onInsert}>
                <div>
                <S.Image {...animatedImage} />
                </div>
                <div className="challenge_form">
                <h1>✨챌린지 등록</h1>
                    <div className='category_row'
                    onClick={(e)=>{setCh_category(e.target.value);
                    }}
                    >
                    <span className='title_span'
                    >카테고리</span>
                        <button type="button" name="규칙적인 생활" value="규칙적인 생활"
                        className='category_btn'>규칙적인 생활</button>

                        <button type="button" name="운동" value="운동"
                        className='category_btn'>운동</button>

                        <button type="button" name="식습관" value="식습관"
                        className='category_btn'>식습관</button>

                        <button type="button" name="마음챙김" value="마음챙김"
                        className='category_btn'>마음챙김</button>

                        <button type="button" name="취미" value="취미"
                        className='category_btn'>취미</button>

                        <button type="button" name="셀프케어" value="셀프케어"
                        className='category_btn'>셀프케어</button>
                    </div>
                    
                        
                    <div className='ch_title_row' style={{display:'inline-block'}}>
                        <span className='title_span'
                        >챌린지명</span>
                            <input type="text" className="ch_name" name="ch_title"
                            value={ch_title}  onChange={(e)=>{  setCh_title(e.target.value); }}
                            style={{width:'400px', display:'inline-block', borderRadius:'10px'
                            }} required placeholder='ex) 매일 7:00am 기상하기'/>
                            <span className="tulp">
                            <HelpOutlineIcon style={{fontSize:'20px', marginLeft:'10px'}}/>
                            <span className="tulc">
                                챌린지의 내용, 빈도를 한 눈에 알아보기 쉽도록 작성 해주세요!
                            </span>
                        </span>
                    </div>    
                    
                    <div className='ch_titlephoto_row' style={{display:'inline-block'}}>
                        <span className='title_span'>대표사진</span>
                        <br/>
                        {/* <input type="file" className="form-control" name="ch_title_photo" onChange={imageUpload} style={{width:'250px'}}/> */}
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" 
                            style={{display:'none'}} onChange={imageUpload}/>

                            <Button variant="contained" component="span" 
                            style={{fontSize:'13px', fontWeight:'bold', backgroundColor:'#3751fa'}}>파일 업로드</Button>
                        </label>
                        <div className='img1' style={{display:'inline-block'}}>
                            <img alt="" src={photoUrl+ch_title_photo} style={{width:'400px', height:'300px'}}/>
                        </div>
                    </div>
                                        
                    <div className='ch_freq_row'>
                    <span className='title_span'>인증빈도</span>
                            <input type="text" className="form-control" placeholder='매일 하루 한 번' disabled
                            style={{width:'300px'}} required />
                    </div>
                        
                    <div className='ch_period_row'>
                    <span className='title_span'>챌린지 기간</span>
                    <br/>
                            {/* 달력에서 기간 선택 가능 */}
                        <div style={{display:'inline-block'}}>
                            <b>시작일</b>
                            <DatePicker
                            ch_startday={ch_startday}
                            selected = {ch_startday}
                            setCh_startday={setCh_startday}
                            locale = { ko }
                            placeholderText="챌린지 시작일을 선택해주세요"
                            dateFormat="yyyy년 MM월 dd일"
                            onChange={date => setCh_startday(date)}
                            />
                        </div>
                        <div style={{display:'inline-block'}}>
                            <b>종료일</b>
                            <DatePicker
                            ch_endday={ch_endday}
                            selected = {ch_endday}
                            setCh_endday={setCh_endday}
                            locale = { ko }
                            placeholderText="챌린지 종료일을 선택해주세요"
                            dateFormat="yyyy년 MM월 dd일"
                            onChange={date => setCh_endday(date)}
                            />
                        </div>

                    </div>
                    
                    <div className='ch_deposit_row'>
                        <span className='title_span'>최소 예치금</span>
                                <div className='chalDeposit'>
                                <input type="number" className="form-control"  step='1' value={ch_deposit}
                                onChange={(e)=>{  setCh_deposit(e.target.value); }}
                                onKeyDown={moneyChange} defaultValue='10000'
                                style={{width:'200px', display:'inline-block'}} required
                                />&nbsp;만원
                                &nbsp;

                                {/* 예치금 고정 체크하면 전체 disabled */}
                                <label><input type="checkbox"
                                />예치금 고정</label>
                                </div>
                    </div>
                    <div className='ch_content_row'>
                    <span className='title_span'>챌린지를 소개해주세요</span>
                        <br/>
                        <textarea className="textarea1"
                            placeholder="클래스 전 숙지해야할 사항을 적어주세요.
                            대여비, 준비물 등 추가 비용이 있는 경우 반드시 적어주세요
                            (ex.시간당 1,000원~1,500원 정도의 장소대여비는 별도입니다.)"
                            onChange={(e)=>{
                                setCh_content(e.target.value);
                            }}></textarea>
                    </div>

                    {/* 인증샷예시 */}
                    <div className='ch_certi_photo_row'>
                        <div style={{display:'inline-block'}}>
                    <span className='title_span'>올바른 인증샷 예시</span>
                        <div>
                        <img alt="" src={photoUrl+ch_exphoto1} className="imgphoto1"/>
                        </div>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={imageUpload2} style={{display:'none'}}/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <AddPhotoAlternateIcon sx={{fontSize: '50px', color:'black'}}/>
                            </IconButton>
                        </label>
                        </div>
                        <div style={{display:'inline-block'}}>
                        <span className='title_span'>나쁜 인증샷 예시</span>
                        <div>
                        <img alt="" src={photoUrl+ch_exphoto2} className="imgphoto2"/>
                        </div>
                            <label htmlFor="icon-button-file2">
                            <Input accept="image/*" id="icon-button-file2" type="file" onChange={imageUpload3} style={{display:'none'}}/>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <AddPhotoAlternateIcon sx={{fontSize: '50px', color:'black'}}/>
                            </IconButton>

                    </label>
                        </div>
                    </div>
                            <div className='ch_button_row'>
                                <button type="submit" className="submit_btn"
                                // onClick={()=>{setShow(!show);
                                // }}
                                > 다음(임시)
                                    {/* {show ? "수정하기" : "다음"} */}
                                </button>

                                {show && <ChallengeExample/>}
                            </div>
                            {/* 다음 버튼 누르면 미리보기 */}
                </div>
                </form>                    
        </div>
    );


};    

export default ChallengeForm;