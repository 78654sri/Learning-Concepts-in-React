import "./Head.css"
import React from 'react';
import { Link } from "react-router-dom";
const Head = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="Food App Logo" />
            </div>
            <div className="nav-itmes">
               <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="contact">contact</Link>
                </li>
                <li>cart</li>
               </ul>
            </div>
        </div>
    );
};

export default Head;
