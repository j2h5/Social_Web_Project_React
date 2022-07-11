import React from 'react'
import './Footer.css'
import {AiFillYoutube,AiFillFacebook,AiFillInstagram} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>About us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>Visit us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>Contact us</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <NavLink to="http://www.facebook.com">< AiFillFacebook style={{ fontSize:'20px',color: 'black',marginLeft:'30px'}}/></NavLink>
                    <NavLink to="http://www.youtube.com">< AiFillYoutube style={{ fontSize:'20px',color: 'black',marginLeft:'30px'}}/></NavLink>
                    <NavLink to="http://www.instagram.com">< AiFillInstagram style={{ fontSize:'20px',color: 'black',marginLeft:'30px'}}/></NavLink>

                </div>
            </div>
        </div>
    )
}

export default Footer
