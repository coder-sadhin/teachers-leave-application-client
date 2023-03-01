import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { serverApi } from '../ServerApi/ServerApi';
import { Link } from 'react-router-dom';
import { HiCalculator } from "react-icons/hi";

const Home = () => {
    const { data: leaveCategory = [] } = useQuery({
        queryKey: ['leaveCategoris'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/leaveCategoris`);
            const data = await res.json();
            return data;
        }
    });
    // console.log(leaveCategory);
    let totalDays = 0;
    for (let i = 0; i < leaveCategory.length; i++) {
        totalDays += Number(leaveCategory[i].totalday);
    }
    // console.log(totalDays);


    return (
        <div className='min-h-[100vh] py-5'>
            <div className='pb-5'>
                <h1 
                    className="text-2xl font-bold text-center p-4"
                    data-aos="fade-left"
                    data-aos-duration="2500"
                    >Welcome to RPI Leave App</h1>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div 
                        className='bg-gray-500 p-3 shadow-2xl rounded-lg text-center'
                        data-aos="zoom-out-right"
                        data-aos-duration="2500"
                        >
                        <HiCalculator className='w-16 h-16 mx-auto text-white'></HiCalculator>
                        <h1 className='text-white text-2xl'>Total Leaves <br /> <span className='text-3xl font-bold'>{totalDays}</span></h1>
                    </div>
                    <div 
                        className='bg-primary p-3 shadow-2xl rounded-lg text-center'
                        data-aos="zoom-out-down"
                        data-aos-duration="2500"
                        >
                        <HiCalculator className='w-16 h-16 mx-auto text-white'></HiCalculator>
                        <h1 className='text-white text-2xl'>Due Leave(s) <br /> <span className='text-3xl font-bold'>7</span></h1>
                    </div>
                    <div 
                        className='bg-gray-500 p-3 shadow-2xl rounded-lg text-center'
                        data-aos="zoom-out-left"
                        data-aos-duration="2500"
                        >
                        <HiCalculator className='w-16 h-16 mx-auto text-white'></HiCalculator>
                        <h1 className='text-white text-2xl'>Spend Leave(s) <br /> <span className='text-3xl font-bold'>5</span></h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-5'>
                <Link className='btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-md font-bold mt-4' to={'/leaves'}>Apply for leave(s)</Link>
            </div>
        </div>
    );
};

export default Home;