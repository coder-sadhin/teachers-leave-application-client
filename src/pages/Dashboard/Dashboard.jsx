import React, { useContext } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import useUserType from '../../Hooks/useUserType';



const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isSuperAdmin, isSubSuperAdmin, isAdmin, isUser, userLoading] = useUserType(user?.email)

    if (userLoading) {
        return <Spinner />
    }
    return (
        <div>
            <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
                <div className='flex justify-center items-center'>
                    <p className='text-6xl font-bold'>Welc</p>
                    <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
                    <p className='text-6xl font-bold mr-2'>me</p>
                    <p className='text-6xl font-bold'>To</p>
                </div>
                <div className='flex justify-center text-gray-500 items-center mt-4'>
                    <p className='text-3xl font-medium'>{
                        (isSuperAdmin && "Admin") || (isSubSuperAdmin && "Admin") || (isAdmin && "Controller") || (isUser && "User")
                    } Dashboard</p>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;