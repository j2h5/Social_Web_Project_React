import React, {useState, useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
// alert MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ShopDetail=()=>{
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
    let detailUrl = SPRING_URL+"shop/detail?num="+num;
    let photoUrl= SPRING_URL+"save/";
    let deletelUrl =  SPRING_URL+"shop/delete?num="+num;


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
            navi("/shop/list")
        })
        handleClose();//다이얼로그 창 닫기
    }

    //처음 랜더링시 위의 함수 호출
    useEffect( () => {
        onDataReceive();
    },[]);

    return (
    <div >
            <table style={{width:'500px'}}>
                <caption><h3>상품 상세보기</h3></caption>
                <tbody>
                    <tr >
                        <td width='350' rowSpan='4'>
                            <img src={photoUrl+data.photo} className="large" alt=""/>
                        </td>
                        <td>
                            <h3>상품명  :  {data.sangpum}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td><h3> 수 량 :  {data.su}</h3></td>
                    </tr>
                    <tr>
                        <td><h3> 단 가  :  {data.dan}</h3></td>
                    </tr>
                    <tr>
                        <td><h4> 날짜  :  {data.ipgoday}</h4></td>
                    </tr>
                    <tr>
                        <td colSpan='2' align="center" className="detail">
                            <button type="button" 
                            onClick={()=>{
                                navi("/shop/list")
                            }}>목록</button>
                            <button type="button"
                            onClick={()=>{
                                navi("/shop/form")
                            }}>상품추가</button>
                            <button type="button"
                            onClick={()=>{
                                navi(`/shop/updateform/${num}`)
                            }}>수정</button>
                            <button type="button" onClick={handleClickOpen}>삭제</button>
                        </td>
                    </tr>
                </tbody>
            </table>


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
    )
}

export default ShopDetail;