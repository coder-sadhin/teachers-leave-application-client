import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const CreditDetails = () => {
    const credit = useLoaderData();
    const { img, name, title, email, facebook, linkedIn, github, session, department, semester, shift, description } = credit;

    console.log(credit);
    return (
        <section className='bg-slate-300'>
            <div className="w-11/12 md:w-10/12  mx-auto py-12">
                <div className=" px-4 pt-3 text-center">
                    <img className='w-11/12 sm:w-[350px] md:w-6/12 lg:w-4/12 h-80 sm:h-[430px] md:h-72 lg:h-96 mx-auto border-8 rounded-2xl border-x-green-600 border-y-orange-600 mb-3 ' src={img} alt="img" />
                    <h2 className=" text-2xl md:text-2xl font-bold mt-6">{name}</h2>
                    <p className='text-xl text-gray-800 font-bold'>{title}</p>
                    <p className='text-lg'><strong>Department: {department}</strong></p>
                    <p className='text-lg'><strong>Semester: {semester}</strong></p>
                    <p className='text-lg'><strong>Shift: {shift}</strong></p>
                    <p className='text-lg'><strong>Session: {session}</strong></p>
                    <div className='flex justify-center mt-3'>
                        <a className='hover:bg-green-400 p-2 rounded-full mr-3' href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><HiOutlineMail className='text-2xl' /></a>
                        <a className='hover:bg-green-400 p-2 rounded-full mr-3' href={facebook}><FaFacebookF className='text-2xl' /></a>
                        <a className='hover:bg-green-400 p-2 rounded-full mr-3' href={linkedIn}><FaLinkedinIn className='text-2xl' /></a>
                        <a className='hover:bg-green-400 p-2 rounded-full mr-3' href={github}><FaGithub className='text-2xl' /></a>
                    </div>
                    <p className='text-justify text-lg font-bold my-10'>{description}</p>
                    <div className="card-actions justify-center pb-4">
                        <Link to="/credits" className="btn btn-outline border-2 hover:bg-white hover:text-black rounded-b-3xl w-full md:w-1/2"><span className='font-bold'>Go back</span></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreditDetails;