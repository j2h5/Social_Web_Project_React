import React from 'react'
import './Hero.css'
//import Hanvideo from './images/HanVideo.mp4';
//import Hangangvideo from './images/HangangVideo.mp4';
import hanch from './images/hanch.mp4';
const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
            <div className='intro'>
                <div className='maintitle'>
                    <h1>Today, Hangang</h1>
                </div>
                {/* <div className='subtitle'>
                    <h1>I am so tired</h1>
                    </div> */}
                </div>
            <video loop autoPlay muted id="bgvid"><source src={hanch} type="video/mp4"/></video>
            </div> 
            
        </div>
    )
}

export default Hero
