import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Main} from './main';
import {Shop, ShopForm, ShopDetail, ShopUpdate } from './shop';

import Register from "./User/Register";
import RegisterTest from "./User/test3";

import Board from "./board/Board";
import BoardForm from "./board/BoardForm";
import BoardDetail from "./board/BoardDetail";
import Login from "./login/Login";
import errimg from "./image/er.png"
import ChallengeForm from "./challenge/ChallengeForm";
import ChallengeList from "./challenge/ChallengeList";
import MainChallenge from "./main/Mainchallenge";
import ChallengeDetail from "./challenge/ChallengeDetail";
import {ClassList, ClassForm, ClassDetail,ClassUpdateForm,ClassGuide,ClassIntroGuide } from './class';
import MoimForm from "./moim/MoimForm";
import MoimDetailForm from "./moim/MoimDetailForm";
import MoimList from "./moim/MoimList";
import LoginFormTest from "./login/LoginFormTest";
import MypageMain from "./mypage/MypageMain";
import CreateList from "./class/CreateList";
import ChatRoom from "./chatting/ChatRoom";
import TTest from "./chatting/TTest";

const RouteMain=()=>{
    return (
        <div>

            <div>
                <Routes>
                <Route path="/" element={<Main/>}/>

                {/* 회원가입 */}
                <Route path="/user/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login/a" element={<LoginFormTest/>}/>
                <Route path="/user/test" element={<RegisterTest/>}/>{/* 테스트 */}

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MypageMain/>}/>


                {/* Shop */}
                <Route path="/shop/list" element={<Shop/>}/>
                <Route path="/shop/form" element={<ShopForm/>}/>
                <Route path="/shop/detail/:num" element={<ShopDetail/>}/>
                <Route path="/shop/updateform/:num" element={<ShopUpdate/>}/>

                {/* Board */}
                <Route path="/board/list/:currentPage" element={<Board/>}/>
                <Route path="/board/form" element={<BoardForm/>}/>
                <Route path="/board/detail/:num/:currentPage" element={<BoardDetail/>}/>
                

                {/* challenge */}
                <Route path="/challenge/form" element={<ChallengeForm/>}/>
                <Route path="/challenge/detail/:num" element={<ChallengeDetail/>}/>
                <Route path="/challenge/list/:currentPage" element={<ChallengeList/>}/>

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

                 {/* Test */}
                <Route path="/test" element={<CreateList/>}/>
                <Route path="/test2" element={<ChatRoom/>}/>
                <Route path="/test3" element={<TTest/>}/>

                


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