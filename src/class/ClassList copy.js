import React, {useState, useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ClassListRowItem from "./ClassListRowItem";


const ClassList=()=>{

    const navi = useNavigate();
    //백엔드에서 받아올 리스트 데이터변수
    const [shopList, setShopList] = useState([]);
    //데이터 가져오는 함수
    const list = () => {
        let url = "http://localhost:9001/class/list";

        axios.get(url)
        .then(res=>{
            //스프링으로부터 받아온 list를 shoplist에 넣기
            setShopList(res.data);
            console.log("len="+res.data.length);
        })
    }
    
    //처음 랜더링 시 "딱 한번" 데이터 가져오기
    useEffect( () => {
        //console.log("list");
        list();
    },[]);

    return (
        <div>
            <button type="button" onClick={()=>{
                navi("/class/form")}}>클래스등록</button>
            <table className="table table-bordered" style={{width:'500px'}}> 
                <thead>
                    <tr style={{backgroundColor:'#ddd'}}>
                        <th width='50'>번호</th>
                        <th width='350'>상품명</th>
                        <th>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        shopList.map((row,idx)=>(
                            <ShopRowItem key={idx} idx={idx} row={row}/>
                        ))
                    } */}
                </tbody>
            </table>

        </div>
    )
}

export default ClassList;