import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Navbar,Main,Demo,Hero,Mainchallenge,Footer, Mainmoim, Mainclass} from './main';
import {Shop, ShopForm, ShopDetail, ShopUpdate } from './shop';
import Board from "./board/Board";
import BoardForm from "./board/BoardForm";
import BoardDetail from "./board/BoardDetail";
import Login from "./login/Login";
import Member from "./member/Member";
import errimg from "./image/er.png"
import Memo from "./memo/Memo";
import MemberList from "./member/Member";
import ChallengeForm from "./challenge/ChallengeForm";
import ChallengeList from "./challenge/ChallengeList";
import MainChallenge from "./main/Mainchallenge";

const RouteMain=()=>{

    return (
        <div>
{/*         
            <div className="Navbar"><Navbar/></div>
            <div className="Hero"><Hero/></div>
            <div className="Demo"><Demo/></div>
            <div className="MainChallenge"><MainChallenge/></div>
            <div className="Mainmoim"><Mainmoim/></div>
            <div className="Mainclass"><Mainclass/></div>
            <div className="Footer"><Footer/></div> */}
            
            <div className="main">
                <Routes>
                <Route path="/" element={<Main/>}/>
                {/* Shop */}
                <Route path="/shop/list" element={<Shop/>}/>
                <Route path="/shop/form" element={<ShopForm/>}/>
                <Route path="/shop/detail/:num" element={<ShopDetail/>}/>
                <Route path="/shop/updateform/:num" element={<ShopUpdate/>}/>
                
                {/* Meomo */}
                <Route path="/memo" element={<Memo/>}/>

                {/* Board */}
                <Route path="/board/list/:currentPage" element={<Board/>}/>
                <Route path="/board/form" element={<BoardForm/>}/>
                <Route path="/board/detail/:num/:currentPage" element={<BoardDetail/>}/>


                <Route path="/member/form" element={<Member/>}/>
                <Route path="/member/list" element={<MemberList/>}/>
                <Route path="/login" element={<Login/>}/>
              

                {/* challenge */}
                <Route path="/challenge/form" element={<ChallengeForm/>}/>
                <Route path="/challenge/list" element={<ChallengeList/>}/>



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