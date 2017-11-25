import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Profile from './Profile';
import Dashboard from './Dashbaord';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>

                <Header/>

                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>

                <Footer/>

            </div>
        </Router>
    );
};

export default App;