import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';

const LoginForm = () => {
    const {login} = useContext(AuthContext);
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
        })
        .catch(err => setLoginError(err.message))
    };
    return (
        <section className='container mx-auto my-12'>
            <div className='py-12 justify-center flex items-center'>
                <div className='bg-slate-200 p-5 border rounded-xl w-9/12 md:w-1/2 lg:w-4/12 mx-auto'>
                    <form onSubmit={handleSubmit(handleLogin)} className='grid grid-cols-1 py-8 gap-1'>
                        <h1 className='text-4xl text-center font-bold'>Login</h1>
                        <div className="form-control">
                            <p className='text-red-600'>{loginError}</p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email address" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: "Password is required" })} placeholder="password" className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-outline text-black font-bold mt-4' type="submit" value="Login" />
                    </form>
                    <p className='font-bold text-center text-lg mb-4 hidden md:block'>New to our Site? <Link to='/register' className='link link-hover text-red-600'>Create New Account</Link></p>
                    <p className='font-bold text-center mb-4 md:hidden'>New to our Site? <Link to='/register' className='link link-hover text-red-600'>Sign Up</Link></p>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;