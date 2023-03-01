import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner'
import { serverApi } from '../../ServerApi/ServerApi';
import { toast } from 'react-hot-toast';


const LeavesForm = () => {

    const { user, loading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [leaves_C, setLeave_C] = useState('');

    const { data: leaveCategory = [], refetch1 } = useQuery({
        queryKey: ['leaveCategoris'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/leaveCategoris`);
            const data = await res.json();
            return data;
        }
    });
    if (leaveCategory.length < 1) {
        refetch1()
    }
    const categoryLeave = leaveCategory?.find(leave => leave?.leaveName === leaves_C)
    // console.log(categoryLeave);

    let totalDays = categoryLeave?.totalday;
    // for (let i = 0; i < leaveCategory.length; i++) {
    //     totalDays += Number(leaveCategory[i].totalday);
    // }

    const [s_date, setS_date] = useState(new Date());
    const [e_date, setE_date] = useState(new Date());
    const [daysBetween, setDaysBetween] = useState('');

    // console.log("Start", startDate, "End", endDate)


    // console.log(e_date);

    const { data: userInfo = [], isLoading, refetch } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/userInfo?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });



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
    const calculateDays = () => {
        const timeDiff = Math.abs(e_date.getTime() - s_date.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setDaysBetween(1 + diffDays);
    }

    const calDates = () => {
        calculateDays()
    }

    const handleSave = data => {
        const department = data.department;
        const name = data.name;
        const shift = data.shift;
        const title = data.title;
        const totalDays = daysBetween
        const description = data.description;
        const status = "pending";


        const leavesInfo = {
            name,
            email: user.email,
            image: user.photoURL,
            department,
            shift,
            leaves_C,
            title,
            s_date,
            e_date,
            totalDays,
            description,
            status
        }
        const dataInfo = leavesInfo;
        console.log(dataInfo);
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
                                <div className='bg-blue-600 p-3 shadow-2xl rounded-lg text-center'>
                                    <h1 className='text-white text-2xl'>Spend Leave(s) <br /> <span className='text-red-600 text-3xl font-bold'>{daysBetween}</span></h1>
                                </div>
                                <div className='bg-gray-500 p-3 shadow-2xl rounded-lg text-center'>
                                    <h1 className='text-white text-2xl'>Due Leave(s) <br /> <span className='text-3xl font-bold'>{(totalDays - daysBetween) || 0}</span></h1>
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
                                    <option selected disabled value=""> Please select category</option>
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
                                <input type="date" value={s_date.toISOString().slice(0, 10)} onChange={(e) => setS_date(new Date(e.target.value))} className="bg-gray-100 input input-bordered" />
                                {errors.s_date && <p role="alert" className='text-red-600'>{errors.s_date?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">End date</span>
                                </label>
                                <input type="date" value={e_date.toISOString().slice(0, 10)} onChange={(e) => setE_date(new Date(e.target.value))} className="bg-gray-100 input input-bordered" />
                                {errors.e_date && <p role="alert" className='text-red-600'>{errors.e_date?.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total leave day(s) <span className='text-red-500 ml-2 mt-[-5px]'>*Click me</span></span>
                                </label>
                                {/* <input type="number" onBlur={handleOnBlur} placeholder="Enter no. of leaves" className="bg-gray-100 input input-bordered" /> */}
                                <input readOnly value={daysBetween} onClick={calDates} placeholder="Click here to calculate dates" className="bg-gray-100 input input-bordered" />

                                {errors.totalDays && <p role="alert" className='text-red-500'>{errors.totalDays?.message}</p>}
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