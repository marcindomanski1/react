import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

const Menu = () => {
    // const menuElements = [
    //     <li key="1">Home</li>,
    //     <li key="2">Profile</li>,
    //     <li key="3">Dashboard</li>
    // ];

    // const menuElements = ['Home', 'Profile', 'Dashboard'].map((element, index) => {
    //     return <li key={index}>{element}</li>;
    // });

    return (
        <Nav bsStyle="pills" activeKey={0}>
            <NavItem eventKey={0}>Home</NavItem>
            <NavItem eventKey={1}>Profile</NavItem>
            <NavItem eventKey={2}>Dashboard</NavItem>
        </Nav>
    );
};

export default Menu;
