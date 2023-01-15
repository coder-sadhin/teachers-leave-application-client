import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';

const LoginForm = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/leaves'
    const { login } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');

    // handle login with email & password
    const handleLogin = data => {
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginError('')
                toast.success('Login successfully.');
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => setLoginError(err.message))
    };
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
            <div className="flex w-11/12 mx-auto items-center justify-center text-center">
                <div className='flex flex-col md:flex-row lg:flex-row bg-white rounded-2xl shadow-2xl max-w-4xl'>
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-left font-bold '>
                            <span className='text-green-500 shadow-xl'>RPI Leave App</span>
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in your Account</h2>
                            <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                            <form onSubmit={handleSubmit(handleLogin)} className='grid grid-cols-1 py-6 gap-1'>
                                <div className="form-control">
                                    <p className='text-red-600'>{loginError}</p>
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
                                <button className='btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-xl font-bold mt-4' type="submit">Login</button>
                            </form>
                            <p className='font-bold text-center text-lg mb-4 hidden md:block'>New to our Site? <Link to='/register' className='link link-hover text-red-600'>Create New Account</Link></p>
                            <p className='font-bold text-center mb-4 md:hidden'>New to our Site? <Link to='/register' className='link link-hover text-red-600'>Sign Up</Link></p>
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 bg-green-500 rounded-tr-2xl rounded md:rounded-br-2xl flex justify-center items-center text-white'>
                        <div className='p-7 '>
                            <h2 className='text-3xl font-bold'>Hello, Users</h2>
                            <div className='border-2 w-10 border-white inline-block mb-2'></div>
                            <p className='mb-10'>Fill up personal Information and start journey with us (RPI).</p>
                            <Link className='border-2 border-white font-semibold hover:bg-blue-600 hover:text-white rounded-full px-12 py-2 inline-block' to='/register'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;