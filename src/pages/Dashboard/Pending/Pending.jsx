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
    console.log(leaves);
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <section className='bg-slate-300 flex justify-center items-center mb-8 md:rounded-md'>
                <h1 className='text-2xl font-bold text-center py-3'>Requeted to You</h1>
            </section>

            {
                leaves.map(leave =>
                    <div className='' key={leave._id}>
                        <section className='bg-slate-300 my-5 py-5 md:rounded-lg'>
                            <div className='w-11/12 mx-auto my-8'>
                                <div className='flex  items-center'>
                                    <img className='w-12 h-12 rounded-full bg-cyan-500 p-2 mr-4' src={calenderLogo} alt="" />
                                    <h2 className='text-sm md:text-xl font-bold'>{leave?.startDate}
                                        <span className='text-gray-500'> to </span>
                                        {leave?.endDate}
                                    </h2>
                                </div>
                                <div className='ml-20'>
                                    <p className='text-[14px] md:text-[16px] text-justify mb-8'>{leave.description}</p>
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