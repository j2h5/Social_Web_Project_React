import React,{useEffect, useState} from "react";
import '../App.css';
import axios from "axios";
import Memo from "./Memo";
import { useNavigate } from "react-router-dom";
import { Location } from "react-router-dom";


const RowMemoItem=({row,idx})=>{

        const Navi=useNavigate();

      //삭제시 호출할 함수
      const onDelete=()=>{
        let deleteUrl="http://localhost:9001/memo/delete?num="+row.num;
        axios.delete(deleteUrl)
        .then(res=>{
            // //삭제후 목록으로 이동
            // Navi("/memo");
            window.location.replace("/memo");
            
        })     
    }

    return(
            <tr>
                <td style={{width:'200px'}}>
                    {row.nickname}
                </td>
                <td style={{width:'300px'}}>
                    {row.message}
                </td>
                <td style={{width:'200px'}}>
                    {row.writeday}&nbsp;<span className="glyphicon glyphicon-remove" onClick={onDelete}></span>
                </td>
            </tr>
    )
}

export default RowMemoItem;