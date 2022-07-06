import React from 'react';
import './Mainchallenge.css'
import challenge from './images/challenge.png'
const MainChallenge = () => {
    return (
        
             <div className='mainchallenge'>
            <div className='mainchallenge_container'>
            <div className='most_mainchallenge'>
            <h1>가장 인기있는 챌린지</h1>
            </div>
        <ul class="imglist_ul">
		<li>
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
					<img src={challenge} alt=''/>
				</div>
				<h3>아침 7시 기상</h3>
				<p>아침7시에 기상하기</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
					<img src={challenge} alt=''/>
				</div>
				<h3>하루 운동30분</h3>
				<p>하루 운동30분하기</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
                    <img src={challenge} alt=''/>
				</div>
				<h3>영단어 100개 암기</h3>
				<p>단어 외우는 챌린지</p>
			</div>
		</li>
        <li>
			<div className='a'>
				<div class="screen1">
					<span></span><span></span><span></span><span></span>
                    <img src={challenge} alt=''/>
				</div>
				<h3>밥 잘먹기</h3>
				<p>꼭꼭 씹어먹기</p>
			</div>
		</li>
		
	</ul>
    </div>
        </div>
     
    );
};

export default MainChallenge;