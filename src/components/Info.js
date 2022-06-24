import React from "react";
import '../App.css';
import infoimg from "../image/1.PNG"

const Info=()=>{

    return (
        <div style={{borderTop:'2px solid lightgray', borderBottom:'2px solid lightgray',width:'140px'}}>
            <img src={infoimg} alt=''style={{marginLeft:'45px'}}/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Info</b>
            <div style={{textAlign:'center'}}>T-Blog</div>
            <div style={{textAlign:'center'}}>010-2222-3333</div>
        </div>
    )
}

export default Info;