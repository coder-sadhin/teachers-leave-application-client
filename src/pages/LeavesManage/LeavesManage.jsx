import React from 'react';
import { Link } from 'react-router-dom';
import calenderLogo from '../../assets/calender-logo.png'
import PrimaryButton from '../../Components/Button/PrimaryButton';

const LeavesManage = () => {
    return (
        <section className='bg-slate-300 py-8 rounded-lg'>
            <div className='w-11/12 mx-auto mt-8'>
            <h1 className='text-2xl font-bold mb-8'>Leaves You Applied</h1>
                <div>
                    <div className='flex items-center'>
                        <img className='w-16 h-16 rounded-full bg-cyan-500 p-2 mr-4' src={calenderLogo} alt="" />
                        <h2 className='text-xl font-bold'>Saturday, May 23 2023
                            <span className='text-gray-500'> to </span>
                            Monday, May 25 2023
                        </h2>
                    </div>
                    <div className='w-10/12 md:w-8/12 ml-20'>
                        <p className='text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo quibusdam voluptatem nihil fugit at eveniet perspiciatis, cum omnis voluptatibus, eos ipsum veritatis dignissimos? Nam possimus incidunt quia rem reprehenderit!</p>
                        <div className='flex justify-between items-center'>
                            <PrimaryButton>Cancle Leave</PrimaryButton>
                            <PrimaryButton>Reshedule</PrimaryButton>
                        </div>
                    </div>
                </div>

            </div>
            <div className="divider w-full mx-auto mt-8"></div>
            <div className='w-11/12 mx-auto'>
                <div className='text-right mb-4'>
                    <Link className='hover:text-red-600 text-center'>View All</Link>
                </div>
                <div className='flex items-center'>
                    <img className='w-16 h-16 rounded-full bg-gray-500 p-2 mr-4' src={calenderLogo} alt="" />
                    <h2 className='text-xl font-bold'>Saturday, May 23 2023
                        <span className='text-gray-500'> to </span>
                        Monday, May 25 2023
                    </h2>
                </div>
                <div className='w-10/12 md:w-8/12 ml-20'>
                    <p className='text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo quibusdam voluptatem nihil fugit at eveniet perspiciatis, cum omnis voluptatibus, eos ipsum veritatis dignissimos? Nam possimus incidunt quia rem reprehenderit!</p>
                </div>
            </div>
        </section>
    );
};

export default LeavesManage;