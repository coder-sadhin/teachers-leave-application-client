import React, { useContext, useEffect, useState } from 'react';
import calenderLogo from '../../assets/calender-logo.png'
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import { serverApi } from '../../ServerApi/ServerApi';
import { toast } from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';

const LeavesHistory = () => {
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
                <h1 className='text-2xl font-bold text-center text-primary py-3'>All leave Histories</h1>
            </section>

            {
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-center'>Start to End Date</th>
                                <th className='text-center'>Leave Category</th>
                                <th className='text-center'>Total Day(s)</th>
                                <th className='text-center'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leaveData?.map((leave, index) => <tr key={leave?._id}>
                                    <td><img className='w-12 h-12 p-2 bg-gray-400 rounded-full mx-auto' src={calenderLogo} alt="" /></td>
                                    <td className='text-center'>{leave?.startDate} <span className='text-red-600 font-semibold'>to</span> {leave?.endDate}</td>
                                    <td className='text-center'>{leave?.leaves_C}</td>
                                    <td className='text-center'>{leave?.totalDays}</td>
                                    <td className='text-center'>{leave?.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default LeavesHistory;