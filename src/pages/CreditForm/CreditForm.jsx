import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { serverApi } from '../../ServerApi/ServerApi';

const CreditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    // imagebb key
    const imageHostKey = process.env.REACT_APP_Imagebb_key;

    // handleSingUp
    const handleSave = data => {
        
        const name = data.name;
        const department = data.department;
        const shift = data.shift;
        const session = data.session;
        const title = data.title;
        const description = data.description;

        // upload image with imagebb
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const img = (imageData.data.display_url);
                const data = {
                    name, img, department, shift, session, title, description
                }
                

                //save credit information to the database
                fetch(`${serverApi}/credits`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("Credit information saved!")
                })
            })

    };
    return (
        <div className='container mx-auto my-12'>
            <div className="bg-slate-300 py-8 rounded-lg">
                <div className=" flex-col">
                    <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                        <h1 className='text-2xl font-bold text-center'>Add Credit Form</h1>
                        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input type="text" {...register("name", { required: "name is required" })} placeholder="Enter your full name" className="bg-gray-100 input input-bordered" />
                                {errors.name && <p role="alert" className='text-red-600 text-center mb-2'>{errors.name?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Attach Picture</span>
                                </label>
                                <input className='' type="file" {...register("image", { required: "Picture is required" })} id="" />
                                {errors.image && <p role="alert" className='text-red-600 text-center mb-2'>{errors.image?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <input type="text" defaultValue="Computer Science" readOnly {...register("department", { required: "Department is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shift</span>
                                </label>
                                <input type="text" defaultValue="2nd" readOnly {...register("shift", { required: "Shift is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Session</span>
                                </label>
                                <input type="text" defaultValue="2018-19" readOnly {...register("session", { required: "Session is required" })} className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: "title is required" })} placeholder="Enter your title/position" className="bg-gray-100 input input-bordered" />
                                {errors.title && <p role="alert" className='text-red-600'>{errors.title?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">About<span className='text-red-600'>*</span></span>
                                </label>
                                <textarea {...register("description", { required: "About is required" })} className="textarea bg-gray-100 input-bordered" placeholder="Enter about your self"></textarea>
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

export default CreditForm;