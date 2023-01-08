import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LeavesMain = () => {
    return (
        <section>
            <div className='container mx-auto my-12'>
            <h3 className='w-full mx-auto text-xl md:text-2xl lg:text-3xl font-semibold text-start mb-6'>You have <span className='font-bold'>3 leaves</span> left this month</h3>
            <div className='pt-8'>
                <ul className='flex justify-around'>
                    <Link to="/leavesForm"><li>Apply</li></Link>
                    <Link><li>Manage</li></Link>
                    <Link><li>View</li></Link>
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