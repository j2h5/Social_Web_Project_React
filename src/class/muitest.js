import React, {useState} from "react";
import '../App.css';
import './ClassForm.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LoupeIcon from '@mui/icons-material/Loupe';
import Editor from './EditorWithUseQuill';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const ClassForm = () =>{
    const [photo, setPhoto] = useState('');
    const [sangpum, setSangpum] = useState('');
    const [su, setSu] = useState('');
    const [dan, setDan] = useState('');

    const navi = useNavigate();

    //url 등록
    let uploadUrl = "http://localhost:9001/class/upload";
    let photoUrl = "http://localhost:9001/save/";
    let insertUrl = "http://localhost:9001/class/insert";

    //file change 시 호출 이벤트
    const uploadImage = (e) =>{
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
        imageFile.append("uploadFile",uploadFile); //uploadFile = spring에서 MultipartFile에서 받아주는 이름

        axios({
            method: 'post',
            url: uploadUrl,
            data: imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data); //백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }

    //추가하는 
    const onInsert = (e) => {
        //axios.post(insertUrl, {sangpum:sangpum, su:su, dan:dan}) // a : b - a는 spring dto의 필드 명, b는 여기서 보내주는 필드명 같을 때는 생략 가능
        axios.post(insertUrl, {sangpum, su, dan })
        .then(res => {
            //insert 성공 후처리 코드
            setSangpum('');
            setSu('');
            setDan('');
            //목록으로 이동
            navi("/class/list")
        })
        .catch(err=>{
            alert(err);
        });
    }
    //
    const min = 1;
    const max = 100;

    const [value, setValue] = useState(1);

    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    };

    return(
        <div>
            <div className="content_container" style={{marginLeft:'310px'}} >
                
                <div className="class_subtitle">홍대한님의 클래스에 대한 기본정보를 입력해주세요!</div>
                <div className="class_subtitle2">
                    <div style={{width:'455px', float:'left', marginTop:'15px'}}>
                    클래스 제목과 커버 이미지가 고민된다면 
                    </div>
                    <span style={{fontSize:'32px', color:'#fea948',width:'55px',float:'left',height:'32px', marginLeft:'5px'}}>
                        👉
                    </span>  
                    <button className="btn1">클래스 가이드 &gt; </button>
                </div> 
                
                <br/>
                <hr className="hr"/>
                <br/><br/>

                <div className="row">
                    <div className="label1">카테고리</div>
                    <select className="label2" >
                        <option key="apple" value="apple">스냅사진</option>
                        <option key="orange" value="orange">스포츠</option>
                        <option key="orange" value="orange">댄스</option>
                        <option key="orange" value="orange">뮤직</option>
                        <option key="orange" value="orange">드로잉</option>
                    </select>
                </div>

                <div className="row">
                    <div className="label1">위치선택</div>
                    <select className="label2" >
                        <option key="apple" value="apple">반포 한강공원</option>
                        <option key="orange" value="orange">잠실 한강공원</option>
                        <option key="orange" value="orange">이촌 한강공원</option>
                        <option key="orange" value="orange">여의도 한강공원</option>
                        <option key="orange" value="orange">난지 한강공원</option>
                        <option key="orange" value="orange">뚝섬 한강공원</option>
                    </select>
                </div>

                <div className="row" >
                    
                    <div className="label1" style={{float:'left'}} >클래스명</div>
                    <input type='text'className="label2" placeholder="클래스명을 입력해주세요"
                    style={{width:'490px', marginLeft:'10px'}}></input>
                    <span style={{fontSize:'35px', color:'gray',width:'55px',height:'68px', marginLeft:'15px', float:'left'}}>
                        <div className="sdf" style={{width:'90px'}}>
                            <LoupeIcon className="que" style={{fontSize:'35px',float:'left'}}/>
                            <span className="asd">
                                Tip! 
                                <br/>클래스의 주제를 연상시키는 제목을 작성해주세요.
                                <br/>튜터님의 전문성을 드러내면 좋습니다.
                                <br/>미사여구, 부사, 형용사는 최대한 지양해주세요.
                            </span>
                        </div>
                    </span>
                    
                </div>

                <div className="row">
                    <div className="label1">대표사진</div>
                        <input type='file'className="label3" placeholder="사진1" style={{marginLeft:'20px'}}></input>
                        <input type='file'className="label3" placeholder="사진1"></input>
                        <input type='file'className="label3" placeholder="사진1"></input>
                        <input type='file'className="label3" placeholder="사진1"></input>
                        <input type='file'className="label3" placeholder="사진1"></input>
                    <div className="classphoto" style={{marginTop:'15px'}}>
                        <div style={{textAlign:'left',width: '760px', marginTop:'5px',marginLeft:'27px', fontSize:'15px'}}>미리보기</div>
                        <div className="smphoto" style={{marginLeft:'27px'}}></div>
                        <div className="smphoto"></div>
                        <div className="smphoto"></div>
                        <div className="smphoto"></div>
                        <div className="smphoto"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="label1">수강대상</div>
                    <select className="label2" >
                        <option key="apple" value="apple">입문</option>
                        <option key="orange" value="orange">초급</option>
                        <option key="orange" value="orange">중급</option>
                        <option key="orange" value="orange">고급</option>
                    </select>
                </div>
                <div className="row">
                    <div className="label1" >총 가격</div>
                    <input type='number'className="label2" defaultValue='0'
                    style={{width:'490px'}}></input>
                    <span style={{fontSize:'20px', marginLeft:'20px'}}>원</span>
                </div>

                <div className="row">
                    <div className="label1" >수강시간</div>
                    <input type='number'className="label2" defaultValue='1'
                    style={{width:'330px'}}></input>
                    <span style={{fontSize:'20px', marginLeft:'20px'}}>시간 (시간당 1000원)</span>
                </div>

                <div className="row">
                    <div className="label1" >일정 및 정원</div>
                    <input type='date'className="label2" defaultValue='1'
                    style={{width:'200px'}}></input>
                    <input type='number'className="label2" defaultValue='1'
                    style={{width:'60px'}}></input>
                    <span style={{fontSize:'20px', marginLeft:'2px'}}>시</span>
                    <span style={{fontSize:'20px', marginLeft:'20px'}}>~</span>
                    <input type='number'className="label2" defaultValue='1'
                    style={{width:'60px'}}></input>
                    <span style={{fontSize:'20px', marginLeft:'2px'}}>시</span>
                    <input type='number'className="label2" defaultValue='1'
                    style={{width:'60px'}}
                    onChange={handleChange}
                    value={value}
                    ></input>
                    <span style={{fontSize:'20px', marginLeft:'2px'}}
                    >명</span>
                    <br/>
                    <div style={{width:'760px', marginLeft:'50px'}}><button className="btn2">+ 일정추가</button></div>
                </div>
                <br/><br/><br/><br/><br/><br/>

                <div className="class_subtitle">수강생들에게 클래스에 대해 상세하게 소개해주세요!</div>
                <div className="class_subtitle2">
                    <div style={{width:'455px', float:'left', marginTop:'15px'}}>
                        인기 클래스가 되는 노하우가 궁금하다면? 
                    </div>
                    <span style={{fontSize:'32px', color:'#fea948',width:'55px',float:'left',height:'32px', marginLeft:'5px'}}>
                        👉
                    </span>  
                    <button className="btn1">클래스 소개 가이드 &gt; </button>
                </div> 
                
                <br/>
                <hr className="hr"/>

                <div className="row">
                    <div className="editor" style={{marginLeft:'50px'}}>
                        <span className="class_minititle">클래스 소개
                            
                        </span><span><HelpOutlineIcon style={{fontSize:'20px', marginLeft:'10px'}}/></span>
                        <Editor placeholder={'Write something...'} />
                    </div>
                </div>

                <div className="row">
                    <div className="editor" style={{marginLeft:'50px'}}>
                        <span className="class_minititle">클래스 요약
                            
                        </span><span><HelpOutlineIcon style={{fontSize:'20px', marginLeft:'10px'}}/></span>
                        <Editor placeholder={'Write something...'} />
                    </div>
                </div>

                <div className="row">
                    <div className="editor" style={{marginLeft:'50px'}}>
                        <span className="class_minititle">클래스 커리큘럼
                            
                        </span><span><HelpOutlineIcon style={{fontSize:'20px', marginLeft:'10px'}}/></span>
                        <Editor placeholder={'Write something...'} />
                    </div>
                </div>

                <div className="row">
                    <div className="editor" style={{marginLeft:'50px'}}>
                        <span className="class_minititle">클래스 공지</span>
                        <textarea className="textarea1"
                            placeholder="클래스 전 숙지해야할 사항을 적어주세요.
                            대여비, 준비물 등 추가 비용이 있는 경우 반드시 적어주세요
                            (ex.시간당 1,000원~1,500원 정도의 장소대여비는 별도입니다.)"
                        ></textarea>
                    </div>
                    <div  style={{marginLeft:'610px', marginTop:'1px'}}>
                        <label>
                            <span  className="anou">공지사항을 노출하시겠습니까?</span> &nbsp;
                            <input type='checkbox'></input>
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="editor" style={{marginLeft:'50px'}}>
                        <span className="class_minititle">튜터 승인 메세지</span>
                        <textarea className="textarea1"
                            placeholder="튜티와 클래스 연결 시에 해당 메세지가 전달됩니다"
                        ></textarea>
                        
                    </div>
                    
                </div>
                <br/><br/><br/>
                <button class="w-btn w-btn-gra3 w-btn-gra-anim" type="button">
                    클래스 등록
                </button>
                <br/><br/><br/><br/><br/>
            </div>
            {/* classcontainer */}
        </div>
    )
}

export default ClassForm;