import React, {useState, useEffect, useRef} from 'react';
import '../cssFolder/Challenge.css';
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
    //const[ch_deposit, setCh_deposit] = useState('');
    const[ch_exphoto1, setCh_exphoto1] = useState('');
    const[ch_exphoto2, setCh_exphoto2] = useState('');
    const[ch_startday, setCh_startday] = useState('');
    const[ch_endday, setCh_endday] = useState('');
    const[ch_period, setCh_period] = useState('');
    const[ch_status, setCh_status] = useState('');

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
    const moneymin = 0;
    const moneymax = 10000000;
    const [ch_deposit, setCh_deposit] = useState('');
    const moneyChange = event => {
        const value = Math.max(moneymin, Math.min(moneymax, Number(event.target.value)));
        setCh_deposit(value);
    };

    // 미리보기/수정 버튼 관련
    const [show, setShow] = useState(false);

    //챌린지 기간 선택 (date picker)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const ChalDatePicker = styled(DatePicker)`
        width: 300px;
        height: 33.99px;
    `;

    //사진 누르면 인증샷 업로드 file
    const photoInput = useRef();
    const handleClick = () =>{
        photoInput.current.click();
    };


    return (
        <div> 
            <Navbar2/>
        {/* 전체div */}
                {/* 챌린지 등록폼 */}
                <form onSubmit={onInsert}>
                <div className="challenge_form" style={{width:'600px'}}>
                <h1>챌린지 등록</h1>
                    <div className='row'>카테고리 &nbsp;
                            <select name="ch_category" onChange={(e)=>{  setCh_category(e.target.value); }}>
                                    <option disabled selected>카테고리 선택</option>
                                    <option>규칙적인 생활</option>
                                    <option>운동</option>
                                    <option>식습관</option>
                                    <option>마음챙김</option>
                                    <option>취미</option>
                                    <option>셀프케어</option> </select>
                    </div>
                        
                    <div className='row'>챌린지명
                            <input type="text" className="form-control" name="ch_title"
                            value={ch_title}  onChange={(e)=>{  setCh_title(e.target.value); }}
                            style={{width:'300px'}} required placeholder='ex) 매일 7:00am 기상하기'/>
                    </div>    
                        
                    <img alt="" src={photoUrl+ch_title_photo} className="imgphoto"/>
                    <div className='row'>대표사진
                            <input type="file" className="form-control" name="ch_title_photo"
                            onChange={imageUpload}
                            style={{width:'250px'}}/>
                    </div>

                        
                    <div className='row'>인증빈도
                            <input type="text" className="form-control" placeholder='매일 하루 한 번' disabled
                            style={{width:'300px'}} required />
                    </div>
                            
                        
                    <div className='row'>챌린지 기간
                            {/* 달력에서 기간 선택 가능 */}
                            <ChalDatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            locale = { ko }
                            placeholderText="챌린지 시작일과 종료일을 선택해주세요"
                            dateFormat="yyyy년 MM월 dd일"
                            //onChange={onDataChange}
                            withPortal/>
                    </div>
                    
                    <div className='row'>최소 예치금
                                <div className='chalDeposit'>
                                <input type="number" className="form-control"  step='1000' value={ch_deposit}
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
                    <div className='row' style={{width:'400px'}}>
                            {/* 에디터 사용 */}
                            <b>챌린지를 소개해주세요</b>
                                <Editor/>
                    </div>

                    {/* 인증샷예시 */}
                    <img alt="" src={photoUrl+ch_exphoto1} className="imgphoto"/>
                    <div className='row'>올바른 인증샷 예시
                            <input type="file" className="form-control" name="ch_title_photo"
                            onChange={imageUpload2}
                            style={{width:'250px'}}/>
                    </div>
                    <img alt="" src={photoUrl+ch_exphoto2} className="imgphoto"/>
                    <div className='row'>나쁜 인증샷 예시
                            <input type="file" className="form-control" name="ch_title_photo"
                            onChange={imageUpload3}
                            style={{width:'250px'}}/>
                    </div>
                    
                    <div className='row'>올바른 인증샷 예시<br/>
                                <div style={{width:'150px', height:'150px',
                                border: '1px solid gray', display:'inline-block', float:'left'}}>

                                <AddPhotoAlternateIcon sx={{fontSize: '60px'}} onClick={handleClick} onChange={imageUpload2}/>

                                <input 
                                    type="file"
                                    accept="image/jpg, image/jpeg, image/png"
                                    multiple
                                    ref={photoInput}
                                    style={{display:'none'}}
                                />
                                </div>

                                <div style={{width:'200px', height:'200px',
                                border:'1px solid gray', marginLeft:'30px',display:'inline-block'}}
                                ></div>
                    </div>
                    
                    <br/>

                    
                    <div className='row'>나쁜 인증샷 예시<br/>
                                <div style={{width:'150px', height:'150px',
                                border: '1px solid gray', display:'inline-block', float:'left'}}>
                                
                                <AddPhotoAlternateIcon sx={{fontSize: '60px'}} onClick={handleClick} onChange={imageUpload3}/>

                                <input 
                                    type="file"
                                    accept="image/jpg, image/jpeg, image/png"
                                    multiple
                                    ref={photoInput}
                                    style={{display:'none'}}
                                />
                                </div>
                                <div style={{width:'200px', height:'200px',
                                border:'1px solid gray', marginLeft:'30px', display:'inline-block'}}
                                // value={certifiBad}
                                ></div>
                    </div>

                            <div className='row'>
                                <button type="submit" className="btn btn-info"
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