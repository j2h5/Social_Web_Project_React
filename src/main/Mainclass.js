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
            <h1>π₯κ°μ₯ μΈκΈ°μλ ν΄λμ€</h1>
            </div>
        <ul class="imglist_ul">
		<li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
					<img src={boardclass} alt=''/>
				</div>
				<h3>μ΄κ²½μ£Όμ λ³΄λκ΅μ€</h3>
				<p>μ΄λ³΄μ νμ</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
					<img src={tango} alt=''/>
				</div>
				<h3>νλ³μ ν±κ³ κ΅μ€</h3>
				<p>ννν±ν±</p>
			</div>
		</li>
		<li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
                    <img src={dancecalss} alt=''/>
				</div>
				<h3>κΉμ νμ λμ€κ΅μ€</h3>
				<p>μ νμ ν¨κ» μΆ€μ</p>
			</div>
		</li>
        <li>
			<div className='a'>
				<div class="screen3">
					<span></span><span></span><span></span><span></span>
                    <img src={classimg} alt=''/>
				</div>
				<h3>κΉμ€μμ μ΄λκ΅μ€</h3>
				<p>μνμΉμ°λ¦¬κ°λμ΄</p>
			</div>
		</li>
		
	</ul>
    </div>
        </div>  
      
    );
};

export default Mainclass;