import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
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
                    <p>임시로 만들어논 푸터</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
