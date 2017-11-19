import React from 'react';
import {Button} from 'react-bootstrap';

const Home = () => {
    const handleClick = () => {
        alert('click');
    };

    return (<div>
            <Button bsStyle="primary" onClick={handleClick}>Button</Button>
        </div>
    );
};

export default Home;