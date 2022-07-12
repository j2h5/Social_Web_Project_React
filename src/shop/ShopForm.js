import React, {useState} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ShopForm = () =>{
    const [photo, setPhoto] = useState('');
    const [sangpum, setSangpum] = useState('');
    const [su, setSu] = useState('');
    const [dan, setDan] = useState('');

    const navi = useNavigate();

    //class table < optionnum
    const [class_category, setClass_category] = useState('스냅사진');
    const [class_location, setClass_location] = useState('반포');
    const [class_name, setClass_name] = useState('');
    const [class_photo1, setClass_photo1] = useState('');
    const [class_photo2, setClass_photo2] = useState('');
    const [class_photo3, setClass_photo3] = useState('');
    const [class_photo4, setClass_photo4] = useState('');
    const [class_photo5, setClass_photo5] = useState('');
    const [class_target, setClass_target] = useState('입문');
    // const [class_price, setClass_price] = useState(0); 밑에서 사용
    // const [class_hour, setClass_hour] = useState(0); 밑에서 사용
    const [class_intro, setClass_intro] = useState('');
    const [class_summ, setClass_summ] = useState('');
    const [class_curri, setClass_curri] = useState('');
    const [class_anoun, setClass_anoun] = useState('');
    const [class_confirm, setClass_confirm] = useState('');

    //classoption table <classnum
    const [classoption_day, setClassoption_day] = useState('');
    //const [classoption_starttime, setClassoption_starttime] = useState(0); 밑에서 사용
    //const [classoption_endtime, setClassoption_endtime] = useState(0); 밑에서 사용
    //const [classoption_totalperson, setClassoption_totalperson] = useState(1); 밑에서 사용
    
    //url 등록
    let uploadUrl = "http://localhost:9001/shop/upload";
    let photoUrl = "http://localhost:9001/save/";
    let insertUrl = "http://localhost:9001/shop/insert";

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
            navi("/shop/list")
        })
        .catch(err=>{
            alert(err);
        });
    }


    return(
        <div>
            <table className="table table-bordered" style={{width:'600px'}}>
                <caption><b>상품 등록</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'250px'}}
                            onChange={(e)=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>상품사진</th>
                        <td width='300'>
                            <input type='file' className="form-control"
                            style={{width:'250px'}} onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>수 량</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'120px'}}
                            onChange={(e)=>{
                                setSu(e.target.value);
                            }}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#d5bbdd'}}>단 가</th>
                        <td width='300'>
                            <input type='text' className="form-control"
                            style={{width:'150px'}} 
                            onChange={(e)=>{
                                setDan(e.target.value);
                            }}/>
                        </td>
                        <th>{dan}</th>
                    </tr>
                    <tr style={{height:'160px'}}>
                        <td  colSpan='2'>
                            <img alt=""src={photoUrl + photo} style={{width:'120px'
                        ,marginLeft:'130px'}}/>
                        </td>
                        <td>
                            <button type="button" className="btn btn-success"
                            style={{width:'120px', height:'120px', marginLeft:'30px'}}
                            onClick={onInsert}>
                                상품등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShopForm;