import React from 'react';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Mynavbar from './components/Mynavbar';
import MyDashNavbar from './components/MyDashNavbar';

import { useAuth } from './components/AuthProvider';

const Home = () => {
    const { auth } = useAuth();

    return (
        <div>
            
            {auth ? <MyDashNavbar /> : <Mynavbar />}
            {auth ? <Dashboard/> : <Login />}
        </div>
    );
};

export default Home;