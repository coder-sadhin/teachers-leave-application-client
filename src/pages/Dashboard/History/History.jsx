import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import calenderLogo from '../../../assets/calender-logo.png'
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import { serverApi } from '../../../ServerApi/ServerApi';

const History = () => {
    const {user} = useContext(AuthContext);
    const { data: leaves = [], isLoading, refetch } = useQuery({
        queryKey: ['pendingLeave'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/pendingLeave?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
   
    if (isLoading) {
        return <Spinner />
    };

    console.log(leaves);
    return (
        <div className='w-11/12 mx-auto'>
            <section className='bg-slate-300 flex justify-center items-center mb-8 md:rounded-md'>
                <h1 className='text-2xl font-bold text-center text-primary py-3'>All leave approved Histories</h1>
            </section>

            {
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th>Profile</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Start to End Date</th>
                            <th className='text-center'>Total Day(s)</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                leaves.map((leave, index) => <tr key={leave?._id}>
                                    <td><img className='w-12 h-12 rounded-full' src={leave?.image} alt="" /></td>
                                    <td className='text-center'>{leave?.name}</td>
                                    <td className='text-center'>{leave?.title}</td>
                                    <td className='text-center'>{leave?.startDate} <span className='text-red-600 font-semibold'>to</span> {leave?.endDate}</td>
                                    <td className='text-center'>{leave?.totalDays}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default History;