import React from "react";
import '../App.css';
import {NavLink} from "react-router-dom";

const Menu=()=>{

    return (
        <div className="menu">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/memo">Memo</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/member/form">Member</NavLink></li>
                <li><NavLink to="/shop/list">Shop</NavLink></li>
                <li><NavLink to="/Board/list/1">Board</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/challenge/form">Challenge</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;