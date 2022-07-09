import React from 'react';
import './Mainmoim.css'
import challenge from './images/challenge.png'
import moim1 from './images/mainmoim.jpg'
import moim2 from './images/moim2.jpg'
import moim3 from './images/moim3.jpg'
import moim4 from './images/moim4.jpg'
const MainMoim = () => {
    return (
    
            <div className='mainmoim'>
            <div className='mainmoim_container'>
            <div className='most_mainmoim'>
            <h1>가장 인기있는 모임</h1>
            </div>
        <ul class="imglist_ul">
		<li>
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
					<img src={moim1} alt=''/>
				</div>
				<h3>이게모임</h3>
				<p>이게뭐냐구요</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
					<img src={moim2} alt=''/>
				</div>
				<h3>저게모임</h3>
				<p>저건뭐예요</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
                    <img src={moim3} alt=''/>
				</div>
				<h3>배고픈 사람들을 위한 모임</h3>
				<p>너무 배고파요</p>
			</div>
		</li>
        <li>
			<div className='a'>
				<div class="screen2">
					<span></span><span></span><span></span><span></span>
                    <img src={moim4} alt=''/>
				</div>
				<h3>홍대한과 아이들</h3>
				<p>훈남모임</p>
			</div>
		</li>
		
	</ul>
    </div>
        </div>
        
    );
};

export default MainMoim