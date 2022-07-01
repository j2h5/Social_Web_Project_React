import React from 'react';
import '../App.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Header = () => {
    return (
        <div>
           <div className='headerContainer'>
            <div className='menuBar'>
                <input type="checkbox" id="menuicon"/>

                    <label for="menuicon">
                        <span>   </span>
                        <span>   </span>
                        <span>   </span>
                    </label>
             <div className='sidebar'>
                
             </div>
            </div>
                <div className='logo'>
                    <a href=""> 오늘, 한강</a>
                </div>

           </div>
        </div>
    );
};

export default Header; 