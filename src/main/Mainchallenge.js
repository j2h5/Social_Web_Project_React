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
            <h1>๐ฅ๊ฐ์ฅ ์ธ๊ธฐ์๋ ์ฑ๋ฆฐ์ง</h1>
            </div>
        <ul class="imglist_ul">
		<li>
		<NavLink style={{textDecoration:'none'}} to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
					<img src={getup} alt=''/>
				</div>
				<h3>์์นจ 7์ ๊ธฐ์</h3>
				<p>์์นจ7์์ ๊ธฐ์ํ๊ธฐ</p>
			</div>
			</NavLink>
		</li>
		<li>
		<NavLink style={{textDecoration:'none'}} to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
					<img src={challenge} alt=''/>
				</div>
				<h3>ํ๋ฃจ ์ด๋30๋ถ</h3>
				<p>ํ๋ฃจ ์ด๋30๋ถํ๊ธฐ</p>
			</div>
			</NavLink>
		</li>
		<li>
		<NavLink style={{textDecoration:'none'}} to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
                    <img src={words} alt=''/>
				</div>
				<h3>์๋จ์ด 100๊ฐ ์๊ธฐ</h3>
				<p>๋จ์ด ์ธ์ฐ๋ ์ฑ๋ฆฐ์ง</p>
			</div>
			</NavLink>
		</li>
        <li>
		<NavLink style={{textDecoration:'none'}} to="/challenge/list">
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
                    <img src={eat} alt=''/>
				</div>
				<h3>๋ฐฅ ์๋จน๊ธฐ</h3>
				<p>๊ผญ๊ผญ ์น์ด๋จน๊ธฐ</p>
			</div>
			</NavLink>
		</li>
		
	</ul>
    </div>
        </div>
     
    );
};

export default MainChallenge;