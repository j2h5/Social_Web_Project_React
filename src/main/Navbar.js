import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'



import './Navbar.css'

const Navbar = () => {
        //setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => { 
        if (window.scrollY >= 150) {
            setColor(true)
        } /*90=header 크기*/
        else {
            setColor(false)
         }    
        
         }

    window.addEventListener('scroll', changeColor)
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    {/* <img src={logo} alt='logo' /> */}<p>오늘, 한강</p>
                </a>
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
             <button type="button" id='side_btn'class="btn btn-outline-secondary">로그인</button>
                <button type="button" id='side_btn' class="btn btn-outline-secondary">마이페이지</button>
                <ul>
                    <li>Class</li>
                    <li>Metting</li>
                    <li>Challenge</li>
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
