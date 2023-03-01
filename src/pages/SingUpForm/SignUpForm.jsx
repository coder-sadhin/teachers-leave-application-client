import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';
import InfoForm from '../InfoForm/InfoForm';

const SingUpForm = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formNum, setFormNum] = useState(0);
    const [signUpInfo, setSignUpInfo] = useState({});

    // imagebb key
    const imageHostKey = process.env.REACT_APP_Imagebb_key;

    // handleSingUp
    const handleSignUP = data => {
        setLoading(true)
        const name = data.name;
        const email = data.email;
        const password = data.password;

        // upload image with imagebb
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        toast.success('Please Wait')
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const img = (imageData.data.display_url);
                const data = {
                    name, email, password, img
                }
                setSignUpInfo(data);
                setLoading(false);
                setFormNum(formNum + 1);
            })
    };
    return (
        <div className='container mx-auto my-12'>
            {
                formNum === 0 && <section>
                    <div className='justify-center flex items-center'>
                        <div 
                            className='bg-base-200 p-5 border rounded-xl w-9/12 md:w-1/2 lg:w-5/12 mx-auto'
                            data-aos="zoom-out-down"
                            data-aos-duration="2500"
                            >
                            <form onSubmit={handleSubmit(handleSignUP)} 
                                className='grid grid-cols-1 py-8 gap-1'
                                >
                                <h1 
                                    className='text-4xl text-center font-bold'
                                    data-aos="flip-left"
                                    data-aos-duration="2000"
                                    >Register Now</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: "Name is required" })} placeholder="your name" className="bg-gray-100 input input-bordered" />
                                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                                    <label className="label">
                                        <span className="label-text">Picture</span>
                                    </label>
                                    <input className='' type="file" {...register("image", { required: "Picture is required" })} id="" />
                                    {errors.image && <p role="alert" className='text-red-600 text-center mb-2'>{errors.image?.message}</p>}
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email address" className="bg-gray-100 input input-bordered" />
                                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: "Password is required" })} placeholder="password" className="bg-gray-100 input input-bordered" />
                                    {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <div className="form-control mt-4">
                                    <button type='submit' className="btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-xl font-bold mt-4">{loading ? <SmallSpinner /> : "Next"}</button>
                                </div>
                            </form>
                            <p className='font-bold mb-4 text-lg text-center'>Already have an account? <Link to='/login' className='link link-hover text-red-600'>Login Now</Link></p>
                        </div>
                    </div>
                </section>
            }
            {
                formNum === 1 && <InfoForm signUpInfo={signUpInfo}></InfoForm>
            }
        </div>
    );
};

export default SingUpForm;