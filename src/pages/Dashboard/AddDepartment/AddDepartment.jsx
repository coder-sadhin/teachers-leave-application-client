import React, { useEffect, useState } from 'react';
import { serverApi } from '../../../ServerApi/ServerApi';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const AddDepartment = () => {
    const [dept, setDept] = useState([]);
    const [addForm, setAddform] = useState(false);
    useEffect(() => {
        fetch(`${serverApi}/allDepartment`)
            .then(res => res.json())
            .then(data => setDept(data))
            .catch(err => console.error(err))
    }, [addForm])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleToAddDept = (event) => {
        const deptName = event.deptName;
        // console.log(deptName)
        // setAddform(false)
        const data = { d_name: deptName }
        fetch(`${serverApi}/addDepartment`, {
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
                    toast.success('Department successfully added');
                    setAddform(false)
                } else {
                    toast.error(data)
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>Welcome to Department Page</h1>
            <div className='my-8'>
                <h3 className='text-xl font-bold mb-3'>Available Department</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        dept.map(d => <div className='w-full py-3 px-5 bg-green-300 text-black' key={d._id}>
                            <h3 className='text-xl font-bold flex justify-between items-center'><span>{d.d_name}</span><span className='text-red-700 cursor-pointer'>X</span></h3>
                        </div>)
                    }
                </div>
            </div>
            {
                !addForm &&
                <div className='flex justify-center items-center'>
                    <h3 onClick={() => setAddform(true)} className='btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold mt-4'>Add A Department</h3>
                </div>
            }
            {
                addForm &&
                <div className='flex justify-center items-center'>
                    <div className=" w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleToAddDept)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Department</span>
                                </label>
                                <input name='deptName' type="text" {...register("deptName", { required: "Department name is required" })} placeholder="Please Enter New Department Name" className="input input-bordered" />
                                {errors.deptName && <p role="alert" className='text-red-600'>{errors.deptName?.message}</p>}
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

export default AddDepartment;