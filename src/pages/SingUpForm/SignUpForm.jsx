import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUpForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [signUpError, setSingUpError] = useState('');

    // handleSingUp
    const handleSignUP = data => {
        const name = data.name;
        const email = data.email;
        console.log(name, email);
    }
    return (
        <section className='container mx-auto my-12'>
            <div className='py-12 justify-center flex items-center'>
                <div className='bg-slate-100 p-5 border rounded-xl w-9/12 md:w-1/2 lg:w-4/12 mx-auto'>
                    <form onSubmit={handleSubmit(handleSignUP)} className='grid grid-cols-1 gap-1'>
                        <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
                        <div className="form-control">
                            <p className='text-red-600'>{signUpError}</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required"})} placeholder="your name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>} 
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required"})} placeholder="email address" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>} 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: "Password is required"})} placeholder="password" className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-primary text-white font-bold mt-4' type="submit" value="Sign Up" />
                    </form>
                    <p className='font-bold mt-3 text-center'>Already have an account? <Link to='/login' className='link link-hover text-red-600'>Login Now</Link></p>
                    <div className="divider my-8"><span className='font-bold'>OR</span></div>
                    <div><button  className='btn btn-secondary text-white font-bold w-full'>Continue with Google</button></div>
                </div>
            </div>
        </section>
    );
};

export default SingUpForm;