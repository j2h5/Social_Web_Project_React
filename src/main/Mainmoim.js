import React from 'react';
import './Mainmoim.css'
import challenge from './images/challenge.png'
import moim1 from './images/mainmoim.jpg'
import moim2 from './images/moim2.jpg'
import moim3 from './images/moim3.jpg'
import moim4 from './images/moim4.jpg'
import {NavLink} from 'react-router-dom';
const MainMoim = () => {
    return (
     
            <div className='mainmoim'>
            <div className='mainmoim_container'>
            <div className='most_mainmoim'>
            <h1>π₯κ°μ₯ μΈκΈ°μλ λͺ¨μ</h1>
            </div>
        <ul class="imglist_ul">
		<li>
		<NavLink style={{textDecoration:'none'}} to="/moim/list">
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
					<img src={moim1} alt=''/>
				</div>
				<h3>μ΄κ² λͺ¨μ</h3>
				<p>μ΄κ² λͺ¨μμ</p>
			</div>
			</NavLink>
		</li>
		<li>
		<NavLink style={{textDecoration:'none'}} to="/moim/list">
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
					<img src={moim2} alt=''/>
				</div>
				<h3>μ κ² λͺ¨μ</h3>
				<p>μ κ±΄λ­μμ</p>
			</div>
			</NavLink>
		</li>
		<li>
		<NavLink style={{textDecoration:'none'}} to="/moim/list">
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
                    <img src={moim3} alt=''/>
				</div>
				<h3>μ΄λ¦μ΄ λ­μμ</h3>
				<p>μ νλ²νΈ λ­μμ</p>
			</div>
				</NavLink>
		</li>
        <li>
		<NavLink style={{textDecoration:'none'}} to="/moim/list">
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
                    <img src={moim4} alt=''/>
				</div>
				<h3>νλνκ³Ό μμ΄λ€</h3>
				<p>νλ¨λͺ¨μ</p>
			</div>
			</NavLink>
		</li>
		
	</ul>
    </div>
        </div>
        
    );
};

export default MainMoim