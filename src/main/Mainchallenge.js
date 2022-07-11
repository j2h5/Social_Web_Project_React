import React from 'react';
import './Mainchallenge.css'
import challenge from './images/challenge.png'
import { NavLink } from 'react-router-dom';
import getup from './images/getup.jpg'
import words from './images/words.jpg'
import eat from './images/eat.jpg'
const MainChallenge = () => {
    return (
            <div className='mainchallenge'>
            <div className='mainchallenge_container'>
            <div className='most_mainchallenge'>
            <h1>가장 인기있는 챌린지</h1>
            </div>
        <ul class="imglist_ul">
		<li>
		<NavLink to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
					<img src={getup} alt=''/>
				</div>
				<h3>아침 7시 기상</h3>
				<p>아침7시에 기상하기</p>
			</div>
			</NavLink>
		</li>
		<li>
		<NavLink to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
					<img src={challenge} alt=''/>
				</div>
				<h3>하루 운동30분</h3>
				<p>하루 운동30분하기</p>
			</div>
			</NavLink>
		</li>
		<li>
			<NavLink to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
                    <img src={words} alt=''/>
				</div>
				<h3>영단어 100개 암기</h3>
				<p>단어 외우는 챌린지</p>
			</div>
			</NavLink>
		</li>
        <li>
		<NavLink to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
                    <img src={eat} alt=''/>
				</div>
				<h3>밥 잘먹기</h3>
				<p>꼭꼭 씹어먹기</p>
			</div>
			</NavLink>
		</li>
		
	</ul>
    </div>
        </div>
     
    );
};

export default MainChallenge;