import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { serverApi } from '../../../ServerApi/ServerApi';

const AddLeave = () => {
    const [leave, setLeave] = useState([]);
    const [addForm, setAddform] = useState(false);
    useEffect(() => {
        fetch(`${serverApi}/addLeave`)
            .then(res => res.json())
            .then(data => setLeave(data))
            .catch(err => console.error(err))
    }, [addForm])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleToAddLeave = (event) => {
        event.preventDefault();
        const form = event.target;
        const leaveName = form.leaveName.value;
        const totalday = form.totalday.value;
        // console.log(leaveName)
        // setAddform(false)
        const data = { leaveName, totalday }
        fetch(`${serverApi}/addLeave`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged === true) {
                    toast.success('leave successfully added');
                    form.reset();
                    setAddform(false)
                } else {
                    toast.error(data)
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>Welcome to leaves Page</h1>
            <div className='my-8'>
                <h3 className='text-xl font-bold mb-3'>Available leave</h3>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        leave.map(d => <div className='w-full py-3 px-5 bg-green-300 text-black' key={d._id}>
                            <h3 className='text-xl font-bold flex justify-between items-center'><span>{d.d_name}</span><span className='text-red-700 cursor-pointer'>X</span></h3>
                        </div>)
                    }
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