import React from 'react';
import './Mainclass.css'
import boardclass from './images/boardclass.jpg'
import classimg from './images/classImg.png'
import dancecalss from './images/danceclass.jpg'
import { NavLink } from 'react-router-dom'
import tango from './images/tango.jpg'
const Mainclass = () => {
    return (
          <div className='mainclass'>
            <div className='mainclass_container'>
            <div className='most_mainclass'>
            <h1>🔥가장 인기있는 클래스</h1>
            </div>
        <ul class="imglist_ul">
		<li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
					<img src={boardclass} alt=''/>
				</div>
				<h3>이경주의 보드교실</h3>
				<p>초보자 환영</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
					<img src={tango} alt=''/>
				</div>
				<h3>한별의 탱고교실</h3>
				<p>팅팅탱탱</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
                    <img src={dancecalss} alt=''/>
				</div>
				<h3>김정하의 댄스교실</h3>
				<p>정하와 함께 춤을</p>
			</div>
		</li>
        <li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
                    <img src={classimg} alt=''/>
				</div>
				<h3>김준영의 운동교실</h3>
				<p>원펀치쓰리강냉이</p>
			</div>
		</li>
		
	</ul>
    </div>
        </div>  
      
    );
};

export default Mainclass;