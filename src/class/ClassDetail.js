import React, {useState, useEffect} from "react";
import '../App.css';
import './ClassDetail.css';
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
// alert MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClassReview from "./ClassReview";
import ReviewModal from "./ReviewModal";


const ClassDetail=()=>{
    const {num} = useParams();
    const [data, setData] = useState('');
    const navi = useNavigate();

    // alert MUI (삭제 다이얼로그 코드 추가)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
    setOpen(true);
    };  
    const handleClose = () => {
    setOpen(false);
    };

    //전역변수등록
    const SPRING_URL=process.env.REACT_APP_SPRING_URL;

    //url등록
    let detailUrl = SPRING_URL+"class/detail?num="+num;
    let photoUrl= SPRING_URL+"save/";
    let deletelUrl =  SPRING_URL+"class/delete?num="+num;

    const [modalOpen2, setModalOpen2] = useState(false);
    const openModal2 = () => {
        setModalOpen2(true);
    };
    const closeModal2 = () => {
        setModalOpen2(false);
    };


    //스프링으로부터 num에 해당하는 data받기
    const onDataReceive = () =>{
        axios.get(detailUrl)
        .then(res=>{  //res에 dto가 들어있음
            //console.log(res.data.sangpum); 상품명 출력 확인
            setData(res.data);
        })
    }

    //삭제시 호출 할 함수
    const onDelete=()=>{
        axios.delete(deletelUrl)
        .then(res=>{
            //삭제 후 목록으로 이동
            navi("/class/list")
        })
        handleClose();//다이얼로그 창 닫기
    }

    //처음 랜더링시 위의 함수 호출
    useEffect( () => {
        onDataReceive();
    },[]);

    return (
    <div >
        <div className="content_container" style={{marginLeft:'310px'}}>
            <div className="class_top">
                <div className="class_title_div">
                    <span className="class_title">
                        [원데이] 한강에서 제트스키 체험하기
                    </span>
                </div>
                <div className="tutor_info">
                    <div class="tutor_image" style={{float:'left'}}>

                    </div>
                    <span className="tutor_name" >
                        홍대한 튜터
                    </span>
                </div>
                {/* 이거 map으로 돌릴 수 있을거같은데 일단 */}
                <div className="class_image1">

                </div>
                <div className="imagemap">
                    <div className="class_image">
                        
                    </div>
                    <div className="class_image">
                        
                    </div>
                    <div className="class_image">
                        
                    </div>
                    <div className="class_image">
                        
                    </div>
                </div>
                
                <div className="class_info" style={{float:'right'}}>
                    <div className="class_plan" style={{float:'left'}}>
                        <span class="class_plann">
                            클래스 일정
                        </span>
                    </div>
                    <select className="plan" >
                        <option key="banana" value="banana">
                        바나나
                        </option>
                        <option key="apple" value="apple">사과</option>
                        <option key="orange" value="orange">오렌지</option>
                    </select>
                    <div className="class_plan_row">
                        <span className="selectplan">
                            2022-06-27 15:00~18:00
                        </span><br/>
                        <div style={{marginTop:'15px'}}>{/* 인워선택 + / - */}
                            <div className="perselect" style={{marginTop:'5px'}}>
                                인원 선택
                            </div>
                            <input type="number" className="percnt"></input>
                        </div>
                        </div>{/* class_plan_row */}
                        <div className="totcnt"> 
                            <div className="money1">
                                11,000원 / 시간 (인당)
                                <div className="money2">
                                    33,000원 / 총 3시간
                                </div>
                            </div>
                        </div>
                        <div className="classbtn">
                            <button className="class_signbtn">클래스 신청하기</button>
                            <button className="class_likebtn">♥</button>
                        </div>
                        
                </div> {/* info */} <br/>
            </div>{/* top */}

            <div className="class_summ">
                <div className="box">
                    <div className="boxtext">반포공원</div>
                </div>
                <div className="box">
                    <div className="boxtext">초~중급자</div>
                </div><div className="box">
                    <div className="boxtext">198개</div>
                </div><div className="box">
                    <div className="boxtext">시간당
                    <br/>
                    18000원</div>
                </div><div className="box">
                    <div className="boxtext">정원 3명</div>
                </div>
            </div>

            <div className="class_tabsum">
                <div className="class_tab">
                    클래스 소개
                </div>
                <div className="class_tab">
                    클래스 커리큘럼
                </div>
                <div className="class_tab">
                    클래스 리뷰
                </div>
            </div>

            {/* class detail info */}
            <div className="class_notice1">
                <div className="class_subtitle" style={{width:'600px'}}>
                    클래스 전 숙지해주세요!
                </div>
                <div className="class_noticecircle">
                    튜터공지
                </div>
            </div>
            <div className="class_notice2">
                <div className="class_subtitle">
                    클래스 요약
                </div>
            </div>
            <div className="class_notice3">
                <div className="class_subtitle">
                    클래스 소개
                </div>
            </div>
            <div className="class_notice4">
                <div className="class_subtitle">
                    클래스 커리큘럼
                </div>
            </div>
            
            {/* review */}
            <div className="class_review">
                <div className="class_subtitle">
                    실제 수강생 리뷰
                </div>

                <div className="class_reviewtitle">
                    <div className="class_reviewcnt">★★★★★ 4.9 (180개)</div>

                    <React.Fragment>
                        <button className="class_reviewbtn" onClick={openModal2}>리뷰 작성하기</button>
                        {/* //header 부분에 텍스트를 입력한다. */}
                        <ReviewModal open={modalOpen2} close={closeModal2} header="리뷰 작성"/>
                            {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달
                            팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요! */}
                    </React.Fragment>
                </div>
                <ClassReview/>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="tyu">
                <button type="button" 
                onClick={()=>{
                    navi("/class/list")
                }}>목록</button>
                <button type="button"
                onClick={()=>{
                    navi("/class/form")
                }}>상품추가</button>
                <button type="button"
                onClick={()=>{
                    navi(`/class/updateform/${num}`)
                }}>수정</button>
                <button type="button" onClick={handleClickOpen}>삭제</button>
                <Dialog open={open} onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description" >
                    <DialogTitle id="alert-dialog-title">상품 삭제</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">{data.sangpum}을 삭제하시겠습니까?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={onDelete} autoFocus>확인</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <br/><br/><br/><br/><br/>
        </div>
            
        
    </div>
    )
}

export default ClassDetail;