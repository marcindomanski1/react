import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const Menu = () => {
    return (
        <Nav bsStyle="pills">
            <LinkContainer exact to="/">
                <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer exact to="/profile">
                <NavItem>Profile</NavItem>
            </LinkContainer>
            <LinkContainer exact to="/dashboard">
                <NavItem>Dashboard</NavItem>
            </LinkContainer>
        </Nav>
    );
};
export default Menu;
