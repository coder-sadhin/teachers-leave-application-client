import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { serverApi } from '../../ServerApi/ServerApi';

const CreditForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    // imagebb key
    const imageHostKey = process.env.REACT_APP_Imagebb_key;

    // handleSingUp
    const handleSave = data => {
        
        const name = data.name;
        const department = data.department;
        const semester = data.semester;
        const shift = data.shift;
        const session = data.session;
        const title = data.title;
        const email = data.email;
        const facebook = data.facebook;
        const linkedIn = data.linkedIn;
        const github = data.github;
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
                    name, img, department, semester, shift, session, title, email, facebook, linkedIn, github, description
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
                    toast.success("Credit information saved!");
                    navigate('/credits');
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
                                    <span className="label-text">Semester</span>
                                </label>
                                <input type="text" defaultValue="8th" readOnly {...register("semester", { required: "Semester is required" })} className="bg-gray-100 input input-bordered" />
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
                                <input type="text" {...register("title", { required: "Title is required" })} placeholder="Enter your title/position" className="bg-gray-100 input input-bordered" />
                                {errors.title && <p role="alert" className='text-red-600'>{errors.title?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">E-mail</span>
                                </label>
                                <input type="email" {...register("email", { required: "E-mail is required" })} placeholder="Enter your email" className="bg-gray-100 input input-bordered" />
                                {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Facebook</span>
                                </label>
                                <input type="text" {...register("facebook", { required: "Facebook is required" })} placeholder="Enter your facebook profile link" className="bg-gray-100 input input-bordered" />
                                {errors.facebook && <p role="alert" className='text-red-600'>{errors.facebook?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LinkedIn</span>
                                </label>
                                <input type="text" {...register("linkedIn")} placeholder="Enter your linkedIn profile link" className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">GitHub</span>
                                </label>
                                <input type="text" {...register("github")} placeholder="Enter your GitHub profile link" className="bg-gray-100 input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">About<span className='text-red-600'>*</span></span>
                                </label>
                                <textarea {...register("description", { required: "About is required" })} className="textarea bg-gray-100 input-bordered" placeholder="Enter about your self"></textarea>
                                {errors.description && <p role="alert" className='text-red-600'>{errors.description?.message}</p>}
                            </div>
                            <div className="form-control">
                                <button type='submit' className="btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold mt-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreditForm;