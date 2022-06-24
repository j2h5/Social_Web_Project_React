import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

const ShopRowItem=({idx,row})=>{
    const navi = useNavigate();

    let photoUrl="http://localhost:9001/save/"; //마지막에 /를 넣는 이유는 뒤에 photoName을 바로 붙이기위해

    return (
        <tr>
            <td>{idx+1}</td>
            <td><img src={photoUrl+row.photo} alt="" className="small"/>
            <b>{row.sangpum}</b></td>
            <td><button type="button" className="btn btn-info btn-sm"
            onClick={()=>{
                //navi(`/shop/detail/${row.num}`)
                navi(`/shop/detail/`+row.num); //위와 같다
            }}>detail</button></td>
        </tr>
    )
}

export default ShopRowItem;