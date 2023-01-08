import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import Navbar from '../../pages/Navbar/Navber';

const LeavesMain = () => {
    const {user} = useContext(AuthContext);
    return (
        <section>
            <Navbar />
            <div className='bg-base-200 container mx-auto py-12'>
                <div className='text-center lg:flex lg:justify-between lg:items-center w-11/12 mx-auto'>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold lg:text-start'>You have <span className='font-bold'>3 leaves</span> left this month</h3>
                    <div className='lg:flex lg:items-center justify-center mt-4 lg:mt-0'>
                        <img className='lg:w-20 mx-auto lg:h-20 w-28 h-28 rounded-full lg:mr-4' src={user?.photoURL} alt="" />
                        <h1 className='text-xl lg:text-2xl font-semibold'>{user?.displayName}</h1>
                    </div>
                </div>
                <div className='pt-8'>
                    <ul className='flex justify-around'>
                        <li><Link to="/leaves/leaveFrom">Apply for Leave(s)</Link></li>
                        <Link><li>Manage Leave(s)</li></Link>
                        <Link><li>View Status</li></Link>
                    </ul>
                </div>
                <div className="divider w-full mx-auto"></div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default LeavesMain;