import React from 'react';
import Menu from './Menu';
import logo from '../logo.svg';
// import './logo.css';

const logoStyle = {
    width: '100px'
};

const Header = () => {
    return (
        <div className="header">
            <h1>Header</h1>
            <img style={logoStyle} src={logo}/>
            <Menu/>
        </div>
    );
};

export default Header;