import React from 'react';
import { Link } from 'react-router-dom';
import calenderLogo from '../../../assets/calender-logo.png'

const History = () => {
    return (
        <section className='bg-slate-300 py-8 md:rounded-lg'>
            <div className='w-11/12 mx-auto mt-4'>
                <div className='text-right mb-4'>
                    <Link className='hover:text-red-600 text-center'>View All</Link>
                </div>
                <h1 className='text-2xl font-bold mb-8'>Approved Leaves</h1>
                <div>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full bg-gray-500 p-2 mr-4' src={calenderLogo} alt="" />
                        <h2 className='text-sm md:text-xl font-bold'>Saturday, May 23 2023
                            <span className='text-gray-500'> to </span>
                            Monday, May 25 2023
                        </h2>
                    </div>
                    <div className='ml-20'>
                        <p className='text-[14px] md:text-[16px] text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo quibusdam voluptatem nihil fugit at eveniet perspiciatis, cum omnis voluptatibus, eos ipsum veritatis dignissimos? Nam possimus incidunt quia rem reprehenderit!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;