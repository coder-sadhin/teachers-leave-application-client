import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';

const LoginForm = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/leaves'
    const { login, forgetFassword } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('')
    const [loginError, setLoginError] = useState('');

    // handle login with email & password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                setLoginError('')
                toast.success('Login successfully.');
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => setLoginError(err.message))
    };


    const handleBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handlerForgetPassword = () => {
        if(!userEmail){
            alert('Please Enter your email address');
            return;
        }
        forgetFassword(userEmail)
        .then( () => {
            alert('Password Reset email sent. Please check your email!')
        })
        .catch( err => {
            setLoginError(err.message)
        })
    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
            <div className="flex w-11/12 mx-auto items-center justify-center text-center">
                <div className='flex flex-col md:flex-row lg:flex-row bg-white rounded-2xl shadow-2xl max-w-4xl'>
                    <div className='w-full p-5'>
                        <div className='text-left font-bold '>
                            <span className='text-green-500 shadow-xl'>RPI Leave App</span>
                        </div>
                        <div className='pt-10 pb-3'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in your Account</h2>
                            <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                            <form onSubmit={handleLogin} className='grid grid-cols-1 py-6 gap-1'>
                                <div className="form-control">
                                    <p className='text-red-600'>{loginError}</p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onBlur={handleBlur} type="email" name='email' placeholder="email address" className="bg-gray-100 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="bg-gray-100 input input-bordered" required />
                                </div>
                                    <p className='font-bold mb-4 mt-2 text-sm text-center'>
                                        Forget password?
                                        <button onClick={handlerForgetPassword} className='link link-hover text-red-600 ml-2'>Reset Password</button></p>
                                <button className='btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-xl font-bold mt-4' type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;