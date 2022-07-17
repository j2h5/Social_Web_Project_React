import React, {useState, useEffect, useRef} from 'react';
import Navbar2 from '../main/Navbar2';
import './UserCss/test3.css';


const test3 = () => {

    return (
        <div className='container'>
            <Navbar2/>
        <div className='wrapper'>
            <div className='login-form'>
            <h1>LOGO DESIGN</h1>
            <form action="">
                <div className='int-area'>
                    <input type="text" name="id" id="id" autoComplete='off' required/>
                    <label for="id">USER NAME</label>
                </div>
                <div className='int-area'>
                    <input type="password" name="pw" id="pw" autoComplete='off' required/>
                    <label for="pw">PASSWORD</label>
                </div>
                <div className='btn-area'>
                    <button type='submit'>LOGIN</button>
                </div>
                <div className='caption'>
                    <a href='/'>Forgot Password?</a>
                </div>
            </form>
        </div>{/* login-form */}
        </div>{/* wrapper */}
        </div>
        
    );
};

export default test3;