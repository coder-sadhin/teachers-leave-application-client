import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import useUserType from '../../Hooks/useUserType';
import Footer from '../../pages/Footer/Footer';
import Navbar from '../../pages/Navbar/Navber';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSuperAdmin, isSubSuperAdmin, isAdmin, isUser, userLoading] = useUserType(user?.email)
    return (
        <section className='bg-base-200 '>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-10">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-bold bg-blue-200">
                        {
                            isSuperAdmin && <>
                                <li className='text-xl'><NavLink to="/dashboard/addDepartment">Add Department</NavLink></li>
                                <li className='text-xl'><NavLink to="/dashboard/addLeave">Add Leave</NavLink></li>
                            </>
                        }
                        <li className='text-xl'><NavLink to="/dashboard/pending">Pending</NavLink></li>
                        <li className='text-xl'><NavLink to="/dashboard/history">History</NavLink></li>
                        {/* <li><button onClick={handleToSignOut}>Sign Out</button></li> */}
                    </ul>
                </div>
                <div className="drawer-content w-11/12 mx-auto py-5 min-h-fit">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default DashboardLayout;
