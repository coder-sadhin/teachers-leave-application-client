import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import calenderLogo from '../../../assets/calender-logo.png';
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import { serverApi } from '../../../ServerApi/ServerApi';

const Pending = () => {
    const { user } = useContext(AuthContext);

    const { data: leaves = [], isLoading, refetch } = useQuery({
        queryKey: ['pendingLeave'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/pendingLeave?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    // console.log(leaves);
    if (isLoading) {
        return <Spinner />
    };

    // console.log(leaves);

    return (
        <div className='w-11/12 mx-auto'>
            <section className='bg-slate-300 flex justify-center items-center mb-8 md:rounded-md'>
                <h1 className='text-2xl font-bold text-center text-primary py-3'>Leave Requeted to You!</h1>
            </section>

            {
                leaves.map(leave =>
                    <div className='' key={leave._id}>
                        <section className='bg-slate-300 my-5 py-5 md:rounded-lg'>
                            <div className='w-11/12 mx-auto my-8'>
                                <div className='flex  items-center'>
                                    <img className='w-12 h-12 rounded-full bg-cyan-500 p-2 mr-4' src={calenderLogo} alt="" />
                                    <h1 className='text-[16px] md:text-2xl text-justify font-semibold'>{leave?.name}</h1>
                                </div>
                                <h1 className='text-lg text-justify font-semibold ml-16 mt-[-10px] mb-2'>{leave?.title}</h1>
                                <div className='ml-16'>
                                    <h2 className='text-[16px] md:text-[16px] text-justify font-bold'><span className='text-gray-600 font-semibold'>Date: </span>{leave?.startDate}
                                        <span className='text-red-500'> to </span>
                                        {leave?.endDate}
                                    </h2>
                                    <p className='text-[14px] md:text-[16px] text-justify font-bold'><span className='text-gray-600 font-semibold'>Total day(s): </span><span className='text-primary'>{leave?.totalDays}</span></p>
                                    <p className='text-[14px] md:text-[16px] text-justify font-bold'><span className='text-gray-600 font-semibold'>Leave category: </span>{leave?.leaves_C}</p>
                                    <p className='text-[14px] md:text-[16px] text-justify font-bold'><span className='text-gray-600 font-semibold'>Department: </span>{leave?.department}</p>
                                    <p className='text-[14px] md:text-[16px] text-justify font-bold'><span className='text-gray-600 font-semibold'>Shift: </span>{leave?.shift}</p>
                                    <p className='text-[16px] md:text-[16px] text-justify my-8'>{leave?.description}</p>
                                    
                                    <div className='flex justify-between items-center'>
                                        <button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold hidden md:block'>Aprove</button>
                                        <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-b-3xl font-bold hidden md:block'>Cancle</button>
                                        <button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-b-2xl font-bold btn-sm md:hidden'>Aprove</button>
                                        <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-b-2xl font-bold btn-sm md:hidden'>Cancle</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            }
        </div>
    );
};

export default Pending;