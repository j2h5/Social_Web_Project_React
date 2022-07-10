import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Main} from './main';
import {Shop, ShopForm, ShopDetail, ShopUpdate } from './shop';
import Board from "./board/Board";
import BoardForm from "./board/BoardForm";
import BoardDetail from "./board/BoardDetail";
import Login from "./login/Login";
import Member from "./member/Member";
import errimg from "./image/er.png"

import MemberList from "./member/Member";
import ChallengeForm from "./challenge/ChallengeForm";
import ChallengeList from "./challenge/ChallengeList";
import MainChallenge from "./main/Mainchallenge";
import ChallengeDetail from "./challenge/ChallengeDetail";
import {ClassList, ClassForm, ClassDetail,ClassUpdateForm,ClassGuide,ClassIntroGuide } from './class';
import MoimForm from "./moim/MoimForm";
import MoimDetailForm from "./moim/MoimDetailForm";
import MoimList from "./moim/MoimList";
import LoginForm from "./login/LoginForm";
import LoginFormTest from "./login/LoginFormTest";
const RouteMain=()=>{
    return (
        <div>

            <div className="main">
                <Routes>
                <Route path="/" element={<Main/>}/>
                {/* Shop */}
                <Route path="/shop/list" element={<Shop/>}/>
                <Route path="/shop/form" element={<ShopForm/>}/>
                <Route path="/shop/detail/:num" element={<ShopDetail/>}/>
                <Route path="/shop/updateform/:num" element={<ShopUpdate/>}/>
          
                {/* Board */}
                <Route path="/board/list/:currentPage" element={<Board/>}/>
                <Route path="/board/form" element={<BoardForm/>}/>
                <Route path="/board/detail/:num/:currentPage" element={<BoardDetail/>}/>
                <Route path="/member/form" element={<Member/>}/>
                <Route path="/member/list" element={<MemberList/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login/a" element={<LoginFormTest/>}/>

                {/* challenge */}
                <Route path="/challenge/form" element={<ChallengeForm/>}/>
                <Route path="/challenge/detail/:num" element={<ChallengeDetail/>}/>
                <Route path="/challenge/list" element={<ChallengeList/>}/>

                {/* Class */}
                <Route path="/class/list" element={<ClassList/>}/>
                <Route path="/class/form" element={<ClassForm/>}/>
                <Route path="/class/detail/:num" element={<ClassDetail/>}/>
                <Route path="/class/updateform/:num" element={<ClassUpdateForm/>}/> 
                <Route path="/class/guide" element={<ClassGuide/>}/>
                <Route path="/class/introguide" element={<ClassIntroGuide/>}/>
                {/* MOIM */}
                <Route path="/moim/form" element={<MoimForm/>}/>
                <Route path="/moim/detailform/:num" element={<MoimDetailForm/>}/>
                <Route path="/moim/list" element={<MoimList/>}/>
                <Route path="*" element={
                    <div>
                        <img src={errimg} alt=""/>
                        <h1>잘못된 URL주소입니다</h1>
                    </div>
                }/>
                </Routes>
            </div>
        </div>
    )
}
export default RouteMain;