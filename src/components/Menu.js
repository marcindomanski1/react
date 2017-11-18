import React from 'react';

const Menu = () => {
    // const menuElements = [
    //     <li key="1">Home</li>,
    //     <li key="2">Profile</li>,
    //     <li key="3">Dashboard</li>
    // ];

    const menuElements = ['Home', 'Profile', 'Dashboard'].map((element, index) => {
        return <li key={index}>{element}</li>;
    });

    return (
        <ul>
            {menuElements}
        </ul>
    );
};

export default Menu;