import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const InfoForm = () => {
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
        
        // {
        //     "email": "",
        //     "department": "",
        //     "imageURL": "",
        //     "title":""
        //     "details": {
        //         "baki gula"
        //     }
        // }

        console.log(details)
    }
    return (
        <div className='container mx-auto my-12'>
            <div className=" bg-base-200 py-14">
                <div className="hero-content flex-col">
                    <div className='text-center font-semibold'>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Rajshahi Polytechnic Institute, Rajshahi </h3>
                    </div>
                    <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6'>Teachers & Employee Information</h3>
                    <div className="divider w-11/12 mx-auto"></div>
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: "Name is required"})} placeholder="Your full name" className="bg-gray-100 input input-bordered" />
                                {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ID no</span>
                                </label>
                                <input type="text" {...register("idNo", { required: "ID is required"})} placeholder="Your roll no" className="bg-gray-100 input input-bordered" />
                                {errors.idNo && <p role="alert" className='text-red-600'>{errors.idNo?.message}</p>}
                            </div>
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
                                    <span className="label-text">Phone no</span>
                                </label>
                                <input type="text" {...register("phone", { required: "Phone no is required"})} placeholder="Your mobile no" className="bg-gray-100 input input-bordered" />
                                {errors.phone && <p role="alert" className='text-red-600'>{errors.phone?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: "Email is required"})} placeholder="Your Email" className="bg-gray-100 input input-bordered" />
                                {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input type="date" {...register("date", { required: "Date of Birth is required"})} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
                                {errors.date && <p role="alert" className='text-red-600'>{errors.date?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <div className='flex justify-start items-center'>
                                    <p className='flex'>
                                        <label htmlFor='male' className="label">
                                            Male
                                        </label>
                                        <input onClick={() => setSex('male')} id='male' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='female' className="label">
                                            Female
                                        </label>
                                        <input onClick={() => setSex('female')} id='female' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='others' className="label">
                                            Others
                                        </label>
                                        <input onClick={() => setSex('others')} id='others' type="radio" name='sex' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Religion</span>
                                </label>
                                <div className='flex justify-start items-center'>
                                <p className='flex'>
                                        <label htmlFor='islam' className="label">
                                            Islam
                                        </label>
                                        <input onClick={() => setReligion('islam')} id='islam' type="radio" name='religion' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='hindu' className="label">
                                            Hindu
                                        </label>
                                        <input onClick={() => setReligion('hindu')} id='hindu' type="radio" name='religion' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='khristan' className="label">
                                            Khristan
                                        </label>
                                        <input onClick={() => setReligion('khristan')} id='others' type="radio" name='religion' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                    <p className='flex'>
                                        <label htmlFor='others' className="label">
                                            Others
                                        </label>
                                        <input onClick={() => setReligion('others')} id='others' type="radio" name='religion' {...register("male")} className="bg-gray-100 border-none " />
                                    </p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Permanent address</span>
                                </label>
                                <input type="text" {...register("address", { required: "Address is required"})} placeholder="Your permanent address" className="bg-gray-100 input input-bordered" />
                                {errors.address && <p role="alert" className='text-red-600'>{errors.address?.message}</p>}
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

export default InfoForm;