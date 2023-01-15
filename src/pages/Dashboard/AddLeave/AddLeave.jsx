import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import { serverApi } from '../../../ServerApi/ServerApi';

const AddLeave = () => {

    const [addForm, setAddform] = useState(false);


    // get leaveCategories from database

    const { data: leaves = [], isLoading, refetch } = useQuery({
        queryKey: ['leaveCategories'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/leaveCategoris`);
            const data = await res.json();
            return data;
        }
    });

    // add leave data to database
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleToAddLeave = data => {
        const leaveName = data.leaveName;
        const totalday = data.totalDay;
        const leaveInfo = { leaveName, totalday }
        fetch(`${serverApi}/addLeave`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(leaveInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged === true) {
                    toast.success('leave successfully added');
                    setAddform(false)
                    refetch();
                } else {
                    toast.error(data)
                }
            })
            .catch(err => console.error(err))
    }

    // delete leaveCategory from database
    const handleDelete = id => {
        const confirm = window.confirm("Are you Sure to delete this leave?")
        if (!confirm) {
            return
        }
        fetch(`${serverApi}/leaveCategory/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Leave Category successfully deleted!')
                refetch();
            })
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>Welcome to leaves Page</h1>
            <div className='my-8'>
                <h3 className='text-xl font-bold mb-3'>Available leave</h3>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Leave Category</th>
                                    <th>Total Day(s)</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leaves.map((leave, index) => <tr key={leave?._id}>
                                        <th>{index + 1}</th>
                                        <td>{leave?.leaveName}</td>
                                        <td>{leave?.totalday}</td>
                                        <td><button className='btn btn-outline border-1 border-green-600 text-black hover:bg-green-600 rounded-b-2xl font-bold btn-sm'>Update</button></td>
                                        <td><button onClick={() => handleDelete(leave?._id)} className='btn btn-outline border-1 border-red-600 text-black hover:bg-red-600 rounded-b-2xl font-bold btn-sm'>Delete</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                !addForm &&
                <div className='flex justify-center items-center'>
                    <h3 onClick={() => setAddform(true)} className='btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold mt-4'>Add A Leave</h3>
                </div>
            }
            {
                addForm &&
                <div className='flex justify-center items-center'>
                    <div className=" w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleToAddLeave)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Leave</span>
                                </label>
                                <input name='leaveName' type="text" {...register("leaveName", { required: "Leave name is required" })} placeholder="Please Enter New leave category Name" className="input input-bordered" />
                                {errors.leaveName && <p role="alert" className='text-red-600'>{errors.leaveName?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total day(s)</span>
                                </label>
                                <input name='totalDay' type="number" {...register("totalDay", { required: "total Day(s) number is required" })} placeholder="Please Enter leave of day(s)" className="input input-bordered" />
                                {errors.totalDay && <p role="alert" className='text-red-600'>{errors.totalDay?.message}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </div>
    );
};

export default AddLeave;