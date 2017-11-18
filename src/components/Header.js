import React from 'react';
import Menu from './Menu';
import logo from '../logo.svg';

const Header = () => {
    return (<div>
        <h1>Header</h1>
        <img src={logo}/>
        <Menu/>
    </div>);
};

export default Header;