import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';

const SingUpForm = () => {
    const {createUser, upDateUser} = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [signUpError, setSingUpError] = useState('');

    // imagebb key
    const imageHostKey = process.env.REACT_APP_Imagebb_key;

    // handleSingUp
    const handleSignUP = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;


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
            // console.log(imageData);
        })

        createUser(email, password)
        .then((result) => {
            const user = result.user;
                toast.success('User Created successfully.')
                setSingUpError('');
                console.log(user)
            const profile = {
                displayName: name,
            }

            upDateUser(profile)
            .then(() => {
            })
            .catch(err => setSingUpError(err.message))
        })
        .catch(err => setSingUpError(err.message))
    };
    return (
        <section className='container mx-auto my-12'>
            <div className='justify-center flex items-center'>
                <div className='bg-base-200 p-5 border rounded-xl w-9/12 md:w-1/2 lg:w-5/12 mx-auto'>
                    <form onSubmit={handleSubmit(handleSignUP)} className='grid grid-cols-1 py-8 gap-1'>
                        <h1 className='text-4xl text-center font-bold'>Register Now</h1>
                        <div className="form-control">
                            <p className='text-red-600'>{signUpError}</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required"})} placeholder="your name" className="bg-gray-100 input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>} 
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input className='' type="file" {...register("image", { required: "Picture is required"})} id="" />
                            {errors.image && <p role="alert" className='text-red-600 text-center mb-2'>{errors.image?.message}</p>} 
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required"})} placeholder="email address" className="bg-gray-100 input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>} 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: "Password is required"})} placeholder="password" className="bg-gray-100 input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-outline text-black font-bold mt-4' type="submit" value="Next" />
                    </form>
                    <p className='font-bold mb-4 text-lg text-center'>Already have an account? <Link to='/login' className='link link-hover text-red-600'>Login Now</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SingUpForm;