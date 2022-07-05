import React from 'react'
import './Hero.css'
//import Hanvideo from './images/HanVideo.mp4';
//import Hangangvideo from './images/HangangVideo.mp4';
import hanch from './images/hanch.mp4';
const Hero = () => {
    return (
        <div className='hero'>
            { <div className='content'>
            <video loop autoPlay muted id="bgvid"><source src={hanch} type="video/mp4"/></video>
            </div> }
            <div className='main_subtitle'><h1>아 집에 가고 싶다</h1></div>
        </div>
    )
}

export default Hero
