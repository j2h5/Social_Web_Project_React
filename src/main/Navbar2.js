import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Weather from "../components/Weather";

import './Navbar2.css'

const Navbar = () => {
        //setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
 

    //change nav color when scrolling
  
    const closeMenu = () => setClick(false)

    
    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('/login/a');
    }
    return (
        
        <div className='header' style={{backgroundColor: 'rgba(75, 106, 153, 0.9)'}}>
                <Weather/>
            <nav className='navbar'>
                    <NavLink style={{textDecoration:'none'}} className='logo' to="/">
                {/* <a href='/' className='logo'> */}
                    {/* <img src={logo} alt='logo' /> */}<h1>오늘, 한강</h1>
                {/* </a> */}
                </NavLink>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <div className='menuBar'>
                <input type="checkbox" id="menuicon"/>

                    <label for="menuicon">
                        <span>   </span>
                        <span>   </span>
                        <span>   </span>
                    </label>
             <div className='sidebar'>
                <button type="button" onClick={navigateToLogin} id='side_btn'class="btn btn-outline-secondary">로그인</button>
                <button type="button" id='side_btn' class="btn btn-outline-secondary">마이페이지</button>
                <ul>
                <li><NavLink className='side_nav' style={{color:'white'}} to="/class/list">Class</NavLink></li>
                    <li><NavLink className='side_nav' style={{color:'white'}} to="/moim/list">Meeting</NavLink></li>
                    <li><NavLink className='side_nav' style={{color:'white'}} to="/challenge/list">Challenge</NavLink></li>
                </ul>

                <ul>
                </ul>
             </div>
            </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>ABOUT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>LOGIN</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>MYPAGE</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
