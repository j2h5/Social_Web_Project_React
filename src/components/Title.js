import React from "react";
import '../App.css';
import titleimg from '../image/title.PNG';
import {NavLink} from "react-router-dom";

const Title=()=>{

    return (
        <div className="title">
            <div style={{marginLeft:'100px'}}>
            <NavLink to="/">
            <img src={titleimg} alt='' style={{height:'150px'}}/></NavLink><br/>
            <b>React+Spring Boot Project</b>
            
            </div>
        </div>
    )
}

export default Title;