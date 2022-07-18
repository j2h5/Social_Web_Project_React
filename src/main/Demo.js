import React from 'react'
import './Demo.css'
 import challengeImg from './images/challengeImg.png'
 import moimImg from './images/moimImg.png'
 import classImg from './images/classImg.png'

// import challengeImg from './images/challenge_a.jpg'
// import moimImg from './images/moim_a.jpg'
// import classImg from './images/class_a.jpg'
// import daehan from './images/daehan.png'
import { NavLink } from 'react-router-dom'
import { NoEncryption } from '@material-ui/icons'
const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
            <div class="gallerylist">
	<ul>
		<li>
        <NavLink  to="/challenge/list">
		<a style={{textDecoration:'none'}}>
            
				<div class="screen">
					<div class="top1">CHALLENGE</div>
					<div class="bottom1">챌린지</div>
					<img src={challengeImg} alt=''/>
				</div>
				<div>
					<h3>CHALLENGE</h3>
				</div>
			</a>
        </NavLink>
		</li>
		<li>
            <NavLink to="/moim/list">
			<a style={{textDecoration:'none'}}>
				<div class="screen">
					<div class="top2">METTING</div>
					<div class="bottom2">모임</div>
					<img src={moimImg} alt=''/>
				</div>
				<div>
					<h3>METTING</h3>
				</div>
			</a>
            </NavLink>
		</li>
		<li>
            <NavLink to="/class/list">
			<a style={{textDecoration:'none'}}>
				<div class="screen">
					<div class="top3">CLASS</div>
					<div class="bottom3">클래스</div>
                
					<img src={classImg} alt=''/>
				</div>
				<div>
					<h3>CLASS</h3>
				</div>
			</a>
            </NavLink>
		</li>
	</ul>
</div>
            </div>
        </div>
    )
}

export default Demo
