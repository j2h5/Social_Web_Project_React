import React from 'react'
import './Demo.css'
import challengeImg from './images/challengeImg.png'
import moimImg from './images/moimImg.png'
import classImg from './images/classImg.png'
import { NavLink } from 'react-router-dom'
const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
            <div class="gallerylist">
	<ul>
		<li>
        <NavLink  to="/challenge/list">
			<a>
            
				<div class="screen">
					<div class="top1">CHALLENGE</div>
					<div class="bottom1">챌린지</div>
					<img src={challengeImg}/>
				</div>
				<div>
					<h3>Challenge with your mate</h3>
				</div>
			</a>
        </NavLink>
		</li>
		<li>
            <NavLink to="/moim/list">
			<a>
				<div class="screen">
					<div class="top2">METTING</div>
					<div class="bottom2">모임</div>
					<img src={moimImg}/>
				</div>
				<div>
					<h3>Group with your buddy</h3>
				</div>
			</a>
            </NavLink>
		</li>
		<li>
            <NavLink to="/class/list">
			<a>
				<div class="screen">
					<div class="top3">CLASS</div>
					<div class="bottom3">클래스</div>
                
					<img src={classImg}/>
				</div>
				<div>
					<h3>Study with other people</h3>
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
