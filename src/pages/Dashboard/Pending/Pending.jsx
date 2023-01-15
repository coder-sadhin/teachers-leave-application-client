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

    if(!isLoading){
        refetch();
    }
    console.log(leaves);

    return (
        <div className='w-11/12 mx-auto'>
            <section className='bg-slate-300 flex justify-center items-center mb-8 md:rounded-md'>
                <h1 className='text-2xl font-bold text-center text-primary py-3'>Leave Requeted to You!</h1>
            </section>

            {
                leaves.map(leave =>
                    <div className='' key={leave._id}>
                        <section className='bg-slate-300 my-5 py-5 md:rounded-lg'>
                            <div className='w-11/12 mx-auto my-4'>
                                <div className='flex  items-center'>
                                    <img className='w-14 h-14 rounded-full bg-cyan-500 mr-4' src={leave?.image} alt="" />
                                    <h1 className='text-[18px] md:text-2xl text-justify font-semibold'>{leave?.name}</h1>
                                </div>
                                <h1 className='text-lg text-justify font-semibold ml-[73px] mt-[-10px] mb-4'>{leave?.title}</h1>
                                <div className=''>
                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            <thead>
                                            <tr>
                                                <th className='text-center'> Start to End Date</th>
                                                <th className='text-center'>Total Day(s)</th>
                                                <th className='text-center'>Leave Category</th>
                                                <th className='text-center'>Department</th>
                                                <th className='text-center'>Shift</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                    <tr>
                                                        <td className='text-center'>{leave?.startDate} <span className='text-red-600 font-semibold'>to</span> {leave?.endDate}</td>
                                                        <td className='text-center'>{leave?.totalDays}</td>
                                                        <td className='text-center'>{leave?.leaves_C}</td>
                                                        <td className='text-center'>{leave?.department}</td>
                                                        <td className='text-center'>{leave?.shift}</td>
                                                    </tr>
                                              
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='flex justify-between items-center mt-8'>
                                        <button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-xl font-bold hidden md:block'>Aprove</button>
                                        <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-xl font-bold hidden md:block'>Cancle</button>
                                        <button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-xl font-bold btn-sm md:hidden'>Aprove</button>
                                        <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-xl font-bold btn-sm md:hidden'>Cancle</button>
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