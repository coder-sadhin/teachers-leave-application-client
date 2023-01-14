import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import Footer from '../../pages/Footer/Footer';
import Navbar from '../../pages/Navbar/Navber';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <section className='bg-base-200'>
            <Navbar />
            <div className=''>
                <div className=' block md:flex'>
                    <div className='w-full md:w-3/12 bg-gray-700 mr-4 p-8 nav leaves-menu'>
                        <ul className='text-white text-center md:text-start'>
                            <li className='text-xl '><NavLink to="/dashboard/addDepartment">Add Dept</NavLink></li>
                            <li className='text-xl'><NavLink to="/dashboard/addLeave">Add Leave</NavLink></li>
                            <li className='text-xl'><NavLink to="/dashboard/pending">Pending</NavLink></li>
                            <li className='text-xl'><NavLink to="/dashboard/history">History</NavLink></li>
                        </ul>
                    </div>
                    <div className='w-full p-8'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default DashboardLayout;