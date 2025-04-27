import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router';
import Footer from './components/Footer.jsx';

const App = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default App;