import React from 'react';
import { Link } from 'react-router-dom';
import calenderLogo from '../../../assets/calender-logo.png'

const Pending = () => {
    return (
        <section className='bg-slate-300 py-8 md:rounded-lg'>
            <div className='w-11/12 mx-auto mt-8'>
                <h1 className='text-2xl font-bold mb-8'>Requeted to You</h1>
                <div>
                    <div className='flex items-center'>
                        <img className='w-12 h-12 rounded-full bg-cyan-500 p-2 mr-4' src={calenderLogo} alt="" />
                        <h2 className='text-sm md:text-xl font-bold'>Saturday, May 23 2023
                            <span className='text-gray-500'> to </span>
                            Monday, May 25 2023
                        </h2>
                    </div>
                    <div className='ml-20'>
                        <p className='text-[14px] md:text-[16px] text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo quibusdam voluptatem nihil fugit at eveniet perspiciatis, cum omnis voluptatibus, eos ipsum veritatis dignissimos? Nam possimus incidunt quia rem reprehenderit!</p>
                        <div className='flex justify-between items-center'>
                            <button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold hidden md:block'>Aprove</button>
                            <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-b-3xl font-bold hidden md:block'>Cancle</button>
                            <button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-b-2xl font-bold btn-sm md:hidden'>Aprove</button>
                            <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-b-2xl font-bold btn-sm md:hidden'>Cancle</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pending;