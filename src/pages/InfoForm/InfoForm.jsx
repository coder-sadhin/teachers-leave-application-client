import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import { serverApi } from '../../ServerApi/ServerApi';


const InfoForm = ({ signUpInfo }) => {
    const [loading, setLoading] = useState(false);
    const { name, email, password, img } = signUpInfo;
    const [signUpError, setSingUpError] = useState('');
    const { createUser, upDateUser, LogOut } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sex, setSex] = useState('');
    const [religion, setReligion] = useState('');
    const navigate = useNavigate();

    // console.log(signUpInfo);
    const handleSave = data => {
        setLoading(true);
        const name = data.name;
        const idNo = data.idNo;
        const department = data.department;
        const shift = data.shift;
        const title = data.title;
        const phone = data.phone;
        const email = data.email;
        const birthday = data.date;
        const address = data.address;
        const Info = {
            email,
            department,
            shift,
            title,
            details: {
                name,
                idNo,
                phone,
                birthday,
                address,
                sex,
                religion
            }
        }
        // console.log(Info)
        handleToSignUp(Info)
    }



    // this is for signup 
    const handleToSignUp = (info) => {
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    toast.success('User Created successfully.')
                    setSingUpError('');
                    const profile = {
                        displayName: name, photoURL: img
                    }
                    upDateUser(profile)
                        .then(() => {
                            setDatabase(info)
                        })
                        .catch(err => setSingUpError(err.message))
                }
                else {
                    toast.error('Some Problem Identify, Please Try Again.')
                }
            })
            .catch(err => setSingUpError(err.message))
    }

    // this is for info Store Database 
    const setDatabase = (info) => {
        const api = `${serverApi}/createUser`;
        fetch(api, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Welcome To RPI')
                    setLoading(false)
                    LogOut()
                    navigate('/confirm')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container mx-auto'>
            {
                loading ? <Spinner /> :
                    <div className=" bg-base-200 py-16">
                        <div className="max-w-[1280px] mx-auto flex-col">
                            <div className='text-center font-semibold'>
                                <h3 className='text-2xl mt-5 md:text-3xl lg:text-4xl font-semibold'>Rajshahi Polytechnic Institute, Rajshahi </h3>
                            </div>
                            <form onSubmit={handleSubmit(handleSave)} className="card w-full">
                                <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6'>Teachers & Servant Information</h3>
                                <div className="divider w-11/12 mx-auto"></div>
                                <p className='text-red-600'>{signUpError}</p>
                                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: "Name is required" })} placeholder="Your full name" className="bg-gray-100 input input-bordered" />
                                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Department</span>
                                        </label>
                                        <select name='department' {...register("department", { required: "Department is required" })} className="bg-gray-100 select select-bordered w-full">
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
                                        <select name='shift' {...register("shift", { required: "Department is required" })} className="bg-gray-100 select select-bordered w-full">
                                            <option>1st</option>
                                            <option>2nd</option>
                                        </select>
                                        {errors.shift && <p role="alert" className='text-red-600'>{errors.shift?.message}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <select name='title' {...register("title", { required: "Title is required" })} className="bg-gray-100 select select-bordered w-full">
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
                                        <input type="text" {...register("phone", { required: "Phone no is required" })} placeholder="Your mobile no" className="bg-gray-100 input input-bordered" />
                                        {errors.phone && <p role="alert" className='text-red-600'>{errors.phone?.message}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input defaultValue={email} readOnly type="email" {...register("email", { required: "Email is required" })} placeholder="Your Email" className="bg-gray-100 input input-bordered" />
                                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date of Birth</span>
                                        </label>
                                        <input type="date" {...register("date", { required: "Date of Birth is required" })} placeholder="Your Birthday" className="bg-gray-100 input input-bordered" />
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
                                                <input onClick={() => setSex('male')} id='male' type="radio" name='sex' className="bg-gray-100 border-none " />
                                            </p>
                                            <p className='flex'>
                                                <label htmlFor='female' className="label">
                                                    Female
                                                </label>
                                                <input onClick={() => setSex('female')} id='female' type="radio" name='sex' className="bg-gray-100 border-none " />
                                            </p>
                                            <p className='flex'>
                                                <label htmlFor='others' className="label">
                                                    Others
                                                </label>
                                                <input onClick={() => setSex('others')} id='others' type="radio" name='sex' className="bg-gray-100 border-none " />
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
                                                <input onClick={() => setReligion('islam')} id='islam' type="radio" name='religion' className="bg-gray-100 border-none " />
                                            </p>
                                            <p className='flex'>
                                                <label htmlFor='hindu' className="label">
                                                    Hindu
                                                </label>
                                                <input onClick={() => setReligion('hindu')} id='hindu' type="radio" name='religion' className="bg-gray-100 border-none " />
                                            </p>
                                            <p className='flex'>
                                                <label htmlFor='khristan' className="label">
                                                    Khristan
                                                </label>
                                                <input onClick={() => setReligion('khristan')} id='others' type="radio" name='religion' className="bg-gray-100 border-none " />
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
                                        <input type="text" {...register("address", { required: "Address is required" })} placeholder="Your permanent address" className="bg-gray-100 input input-bordered" />
                                        {errors.address && <p role="alert" className='text-red-600'>{errors.address?.message}</p>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className='btn btn-outline border-2 border-green-600 text-black hover:bg-green-600 rounded-b-3xl font-bold mt-4'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
};

export default InfoForm;