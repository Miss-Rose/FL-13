import React from 'react';
import logo from '../logo.png';
import '../styles/header.css';
import Button from "./Button";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/' className="head">
                <img width="5%" height="5%" src={logo} alt="logo"/>
                <span>LEARN</span>
            </Link>
        </header>
    );
};

export default Header;