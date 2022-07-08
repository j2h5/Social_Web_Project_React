import React, {useState, useEffect} from "react";
import Editor from '../class/EditorWithUseQuill';
import '../cssFolder/MoimForm.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const MoimForm = () => {
    const [data,setData] = useState({
        moim_name:'',
        moim_leader:'',
        moim_place:'',
        moim_count:'',
        moim_photo:'',
        moim_content:''
    });
    const navi = useNavigate();

    //submit 시 호출될 함수
    const onSave = (e) =>{
        e.preventDefault(); //기본 이벤트를 무효화

            const url = "http://localhost:9009/moim/insert";
            axios.post(url, data)
            .then(res=>{
                alert("insert 성공")
                //navi("/login")
            });
    }

    //data 관련 데이터 입력시 호출
    const onDataChange =(e) =>{
        const {name,value}=e.target;

        setData({
            ...data,
            [name]:value
        })

        console.log(data);
    }

    return (
        <div style={{marginLeft:"500px"}}>
            <form className="form-inline" onSubmit={onSave}>
            <div></div>
            <br></br><br></br><br></br>
            <h1> 모임등록</h1>
            <br></br>
             <div className="label1" >모임명</div>
             <input type='text' className="form-control" name="moim_name" 
                        style={{width:'650px', height:'70px'}} placeholder="모임명 입력" onChange={onDataChange}
                        />
             <br></br>           
             <div style={{display:'block'}}>
                <div style={{display:"inline-block"}}>
           
             <div className="label1">방장</div> 
             <input type='text' className="form-control" name="moim_leader" onChange={onDataChange}
                        style={{width:'200px', height:'70px',display:'inline-block'}} placeholder="방장"
                        />
                        </div>
                        <div style={{display:"inline-block"}}>
             
             <div className="label1">장소</div>  
             <input type='text' className="form-control" name="moim_place" onChange={onDataChange}
                        style={{width:'200px', height:'70px',display:'inline-block'}} placeholder="장소"
                        />
                        </div>
             </div>
             <br></br>
             <div style={{display:'block'}}>
                <div style={{display:"inline-block"}}>
           
             <div className="label1">참여인원수</div> 
             <input type='text' className="form-control" name="moim_count" onChange={onDataChange}
                        style={{width:'200px', height:'70px',display:'inline-block'}} placeholder="참여인원수"
                        />
                        </div>
                        <div style={{display:"inline-block"}}>
             
             <div className="label1">사진</div> 
             <input type='file' className="form-control" name="moim_photo" onChange={onDataChange}
                        style={{width:'200px', height:'70px',display:'inline-block'}} placeholder="사진"
                         
                        />
                        </div>
             </div>
                    
             
            <br></br><br></br>

              {/* <div className="row">
                <div className="label1">카테고리</div>
                    <select className="label2" >
                        <option key="apple" value="apple">운동</option>
                        <option key="orange" value="orange">문화공연</option>
                        <option key="orange" value="orange">사교인맥</option>
                        <option key="orange" value="orange">마음챙김</option>
                        <option key="orange" value="orange">취미</option>
                        <option key="orange" value="orange">공부</option>
                    </select>
               </div> */}

                {/* <div className="row">
                    <div className="label1">위치선택</div>
                        <select className="label2" >
                            <option key="apple" value="apple">반포 한강공원</option>
                            <option key="orange" value="orange">잠실 한강공원</option>
                            <option key="orange" value="orange">이촌 한강공원</option>
                            <option key="orange" value="orange">여의도 한강공원</option>
                             <option key="orange" value="orange">난지 한강공원</option>
                            <option key="orange" value="orange">뚝섬 한강공원</option>
                        </select>
                </div> */}
                
                <div style={{ width:"880px"}}>
                    <h3>모집글 작성</h3>
                <Editor placeholder={'Write something...'} />
                </div>




                <br/><br/><br/>
                <button class="w-btn w-btn-gra3 w-btn-gra-anim" type="submit">
                    모임 등록
                </button>
                <br/><br/><br/><br/><br/>
                </form>
        </div>
    );
};

export default MoimForm;