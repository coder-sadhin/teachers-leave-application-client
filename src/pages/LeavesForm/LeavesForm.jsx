import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner'

const LeavesForm = () => {
    const {user, loading} = useContext(AuthContext);
    console.log(user);
    const {register, handleSubmit, formState: {errors}} = useForm();


    const {data: userInfo = [], isLoading} = useQuery({
        queryKey: ['userInfo'],
        queryFn: async() => {
            const res = await fetch(`https://teachers-leave-application-server.vercel.app/userInfo?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });


    if(isLoading || loading){
        return <Spinner />
    }
    console.log(userInfo);


    const handleSave = data => {

        const department = data.department;
        const name = data.name;
        const shift = data.shift;
        const leaves = data.leaves;
        const title = data.title;
        const startDate = data.startDate;
        const endDate = data.endDate;
        const totalDays = data.totalDays;
        const description = data.description;


        const leavesInfo = {
            name,
            department,
            shift,
            leaves,
            title,
            startDate,
            endDate,
            totalDays,
            description
        }
    
        console.log(leavesInfo);
    }
    return (
        <div className='container mx-auto'>
            <div className=" bg-base-200 py-16">
                <div className="hero-content flex-col">
                    <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input defaultValue={userInfo?.details?.name} readOnly type="name" {...register("name", { required: "name is required"})} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <input defaultValue={userInfo?.department} readOnly type="department" {...register("department", { required: "department is required"})} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shift</span>
                                </label>
                                <input defaultValue={userInfo?.shift} readOnly type="shift" {...register("shift", { required: "shift is required"})} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Leaves category</span>
                                </label>
                                <select name='leaves' {...register("leaves", { required: "leaves is required"})} className="bg-gray-100 select select-bordered w-full">
                                    <option>Casual Leave</option>
                                    <option>Sich Leave</option>
                                    <option>Festival Holiday</option>
                                    <option>Weekly Holiday</option>
                                </select>
                                {errors.leaves && <p role="alert" className='text-red-600'>{errors.leaves?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input defaultValue={userInfo?.title} readOnly type="title" {...register("title", { required: "title is required"})} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Start date<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="date" {...register("startDate", { required: "Start date is required"})} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.startDate && <p role="alert" className='text-red-600'>{errors.startDate?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">End date<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="date" {...register("endDate", { required: "End date is required"})} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.endDate && <p role="alert" className='text-red-600'>{errors.endDate?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">No. of days leaves required<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="number" {...register("totalDays", { required: "Total days is required"})} placeholder="Enter no. of leaves" className="bg-gray-100 input input-bordered" />
                                {errors.totalDays && <p role="alert" className='text-red-600'>{errors.totalDays?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Reason for Leave<span className='text-red-600'>*</span></span>
                                </label>
                                <textarea {...register("description", { required: "Reason for leave is required"})} className="textarea bg-gray-100 input-bordered" placeholder="Description"></textarea>
                                {errors.description && <p role="alert" className='text-red-600'>{errors.description?.message}</p>}
                            </div>
                            <div className="form-control mt-4">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeavesForm;