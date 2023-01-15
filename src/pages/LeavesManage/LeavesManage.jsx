import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import calenderLogo from '../../assets/calender-logo.png'
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import { serverApi } from '../../ServerApi/ServerApi';
import { toast } from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';

const LeavesManage = () => {
    const { user } = useContext(AuthContext);
    const [leaveData, setLeaveData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${serverApi}/manageLeave?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLeaveData(data);
                setLoading(false)
            })
            .catch(err => toast.error(err))
    }, [user, user?.email])

    console.log(leaveData);
    if(isLoading){
        return <Spinner />
    }
    return (
        <div className='w-11/12 mx-auto'>
            <section className='bg-slate-300 flex justify-center items-center mb-8 md:rounded-md'>
                <h1 className='text-2xl font-bold text-center text-primary py-3'>Leave You Applied</h1>
            </section>

            {
                leaveData?.map(leave =>
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
                                    
                                    <button className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-b-3xl font-bold hidden md:block'>Cancle Leave</button>
                                </div>
                            </div>

                            <div className="divider w-full mx-auto mt-8"></div>
                                {
                                    leaveData.map(leave => 
                                        <div className='w-11/12 mx-auto' key={leave._id}>
                                            <div className='text-right mb-4'>
                                                <Link className='hover:text-red-600 text-center'>View All</Link>
                                            </div>
                                            <div className='flex items-center'>
                                                <img className='w-12 h-12 rounded-full bg-gray-500 p-2 mr-4' src={calenderLogo} alt="" />
                                                <h2 className='text-xl font-bold'>{leave?.startDate}
                                                    <span className='text-gray-500'> to </span>
                                                    {leave?.endDate}
                                                </h2>
                                            </div>
                                            <div className='ml-20'>
                                                <p className='text-justify mb-8'>{leave?.description}</p>
                                            </div>
                                        </div>)
                                }
                        </section>
                    </div>
                )
            }
        </div>
    );
};

export default LeavesManage;