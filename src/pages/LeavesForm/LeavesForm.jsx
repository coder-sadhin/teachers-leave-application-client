import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner'
import { serverApi } from '../../ServerApi/ServerApi';
import { toast } from 'react-hot-toast';
import { DateRangePicker } from 'rsuite';
import DateRangeComp from '../../Components/DateRangeComp';

// import moment from 'moment';

const LeavesForm = () => {

    const { user, loading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [leaves_C, setLeave_C] = useState('');
    const [totalDay, setTotalDay] = useState('');

    // console.log(leave, totalDay);

    const { data: userInfo = [], isLoading, refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/userInfo?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



    const handleSelect = (ranges) => {
        console.log(ranges.selection.startDate);
        console.log(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }


    const { data: leaveCategory = [] } = useQuery({
        queryKey: ['leaveCategoris'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/leaveCategoris`);
            const data = await res.json();
            return data;
        }
    });

    let totalDays = 0;
    for (let i = 0; i < leaveCategory.length; i++) {
        totalDays += Number(leaveCategory[i].totalday);
    }



    if (user?.email || user) {
        if (!userInfo || userInfo === "Unauthorized Access") {
            refetch()
        }
    }

    if (loading || isLoading) {
        return <Spinner />
    }

    // data get to leaveCategory
    const handleOnclick = event => {
        const leave = event.target.value;
        setLeave_C(leave);
    }

    // data get to totalDay(s)
    const handleOnBlur = event => {
        const totalDay = event.target.value;
        setTotalDay(totalDay);
    }


    const handleSave = data => {
        const department = data.department;
        const name = data.name;
        const shift = data.shift;
        const title = data.title;
        const startDate = data.startDate;
        const endDate = data.endDate;
        const description = data.description;
        const status = "pending";
        // const startDate = moment(data.startDate).format('DD-MM-YYYY');
        // console.log(startDate, 'Date Format');

        const leavesInfo = {
            name,
            email: user.email,
            image: user.photoURL,
            department,
            shift,
            leaves_C,
            title,
            startDate,
            endDate,
            totalDay,
            description,
            status
        }
        const dataInfo = leavesInfo;
        // console.log(leavesInfo);
        fetch(`${serverApi}/applyLeave`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Leave Application Complete, Please wait for aproved');

                } else {
                    // toast.error(data)
                    toast.error(data)
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <div className='container mx-auto'>
            <div className="bg-slate-300 py-8 rounded-lg">
                <div className=" flex-col">
                    <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                        <div className='w-11/12 mx-auto'>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                <div className='bg-gray-500 p-3 shadow-2xl rounded-lg text-center'>
                                    <h1 className='text-white text-2xl'>Total Leaves <br /> <span className='text-3xl font-bold'>{totalDays}</span></h1>
                                </div>
                                <div className='bg-primary p-3 shadow-2xl rounded-lg text-center'>
                                    <h1 className='text-white text-2xl'>Due Leave(s) <br /> <span className='text-3xl font-bold'>7</span></h1>
                                </div>
                                <div className='bg-gray-500 p-3 shadow-2xl rounded-lg text-center'>
                                    <h1 className='text-white text-2xl'>Spend Leave(s) <br /> <span className='text-3xl font-bold'>5</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input defaultValue={userInfo?.details?.name} readOnly type="text" {...register("name", { required: "name is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <input defaultValue={userInfo?.department} readOnly type="text" {...register("department", { required: "department is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shift</span>
                                </label>
                                <input defaultValue={userInfo?.shift} readOnly type="text" {...register("shift", { required: "shift is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Leaves category</span>
                                </label>
                                <select name='leaves' onClick={handleOnclick} className="bg-gray-100 select select-bordered w-full">
                                    <option> Please select category</option>
                                    {
                                        leaveCategory?.map(leave => <option key={leave?._id}>{leave?.leaveName}</option>)
                                    }
                                </select>
                                {errors.leaves && <p role="alert" className='text-red-600'>{errors.leaves?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input defaultValue={userInfo?.title} readOnly type="text" {...register("title", { required: "title is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Start date</span>
                                </label>
                                <input type="date" {...register("startDate", { required: "Start date is required" })} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.startDate && <p role="alert" className='text-red-600'>{errors.startDate?.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">End date</span>
                                </label>
                                <input type="date" {...register("endDate", { required: "End date is required" })} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.endDate && <p role="alert" className='text-red-600'>{errors.endDate?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">No. of days leaves required</span>
                                </label>
                                <input type="number" onBlur={handleOnBlur} placeholder="Enter no. of leaves" className="bg-gray-100 input input-bordered" />
                                {errors.totalDays && <p role="alert" className='text-red-600'>{errors.totalDays?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Reason for Leave</span>
                                </label>
                                <textarea {...register("description", { required: "Reason for leave is required" })} className="textarea bg-gray-100 input-bordered" placeholder="Description"></textarea>
                                {errors.description && <p role="alert" className='text-red-600'>{errors.description?.message}</p>}
                            </div>
                            <div className="form-control mt-4">
                                <button type='submit' className="btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-xl font-bold mt-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeavesForm;