import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';
import Footer from '../pages/Footer/Footer';
import Navbar from '../pages/Navbar/Navber';

const Main = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {
                user ? <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </> : <Outlet />
            }

        </div>
    );
};

export default Main;