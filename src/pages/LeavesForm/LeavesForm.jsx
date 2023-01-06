import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LeavesForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [sex, setSex] = useState('');
    const [religion, setReligion] = useState('');

    const handleSave = data => {

        const name = data.name;
        const idNo = data.idNo;
        const department = data.department;
        const shift = data.shift;
        const title = data.title;
        const phone = data.phone;
        const email = data.email;
        const birthday = data.date;
        const address = data.address;


        const details = {
            name,
            idNo,
            department,
            shift,
            title,
            phone,
            email,
            birthday,
            address,
            sex,
            religion
        }
    
        console.log(details)
    }
    return (
        <div className='container mx-auto'>
            <div className=" bg-base-200 py-16">
                <div className="hero-content flex-col">
                    <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                        <h3 className='w-11/12 mx-auto text-xl md:text-2xl lg:text-3xl font-semibold text-start md:mb-2'>You have <span className='font-bold'>3 leaves</span> left this months</h3>
                    <div className="divider w-11/12 mx-auto"></div>
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <select name='department' {...register("department", { required: "Department is required"})} className="bg-gray-100 select select-bordered w-full">
                                    <option>computer</option>
                                    <option>civil</option>
                                    <option>electrical</option>
                                    <option>electronics</option>
                                    <option>electromedical</option>
                                    <option>mechanical</option>
                                    <option>mechatronics</option>
                                    <option>power</option>
                                </select>
                                {errors.department && <p role="alert" className='text-red-600'>{errors.department?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shift</span>
                                </label>
                                <select name='shift' {...register("shift", { required: "Shift is required"})} className="bg-gray-100 select select-bordered w-full">
                                    <option>1st</option>
                                    <option>2nd</option>
                                </select>
                                {errors.shift && <p role="alert" className='text-red-600'>{errors.shift?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Leaves category</span>
                                </label>
                                <select name='leaves' {...register("leaves", { required: "leaves is required"})} className="bg-gray-100 select select-bordered w-full">
                                    <option>Casual Leave (Total Leaves 8) (Deu Leaves 5) (Spend Leaves 3)</option>
                                    <option>Sich Leave (Total Leaves 12) (Deu Leaves 4) (Spend Leaves 8)</option>
                                    <option>Festival Holiday (Total Leaves 6) (Deu Leaves 4) (Spend Leaves 2)</option>
                                    <option>Weekly Holiday (Total Leaves 8) (Deu Leaves 5) (Spend Leaves 3)</option>
                                </select>
                                {errors.leaves && <p role="alert" className='text-red-600'>{errors.leaves?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <select name='title' {...register("title", { required: "Title is required"})} className="bg-gray-100 select select-bordered w-full">
                                    <option>Chief Instructor</option>
                                    <option>Instructor</option>
                                    <option>Sub Instructor</option>
                                    <option>Servant</option>
                                </select>
                                {errors.title && <p role="alert" className='text-red-600'>{errors.title?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Start date<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="date" {...register("date", { required: "Start date is required"})} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.date && <p role="alert" className='text-red-600'>{errors.date?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">End date<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="date" {...register("date", { required: "End date is required"})} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.date && <p role="alert" className='text-red-600'>{errors.date?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">No. of days leaves required<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="number" {...register("totalDay", { required: "Total days is required"})} placeholder="Enter no. of leaves" className="bg-gray-100 input input-bordered" />
                                {errors.totalDay && <p role="alert" className='text-red-600'>{errors.totalDay?.message}</p>}
                            </div>
                            <div className="form-control mt-9">
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