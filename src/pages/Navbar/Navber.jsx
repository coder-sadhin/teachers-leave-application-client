import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import useUserType from '../../Hooks/useUserType';

const Navbar = () => {
    const { user, LogOut, setDashboardModalIcon, dashboardModalIcon } = useContext(AuthContext);
    const [isSuperAdmin, isSubSuperAdmin, isAdmin] = useUserType(user?.email)
    return (
        <div>
            <section className='bg-slate-400'>
                <div className="container mx-auto navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/creditForm">Add Credit</Link></li>

                                <li><Link to="/leaves">Leaves</Link></li>

                                {
                                    (isSuperAdmin || isSubSuperAdmin || isAdmin) && <li><Link onClick={() => setDashboardModalIcon(true)} to="/dashboard">Dashboard</Link></li>
                                }
                                <li><Link to="/credits">Credits</Link></li>
                                <li><button onClick={LogOut}>Log Out</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <Link to={'/'} className="btn btn-ghost normal-case text-2xl font-semibold">RPI Leave App</Link>
                    </div>
                    {
                        dashboardModalIcon && <div className="navbar-end  lg:hidden">
                            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </div>
                    }

                </div>
            </section>
        </div>
    );
};

export default Navbar;