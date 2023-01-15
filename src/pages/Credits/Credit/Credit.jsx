import React from 'react';
import { Link } from 'react-router-dom';
import './Credit.css'

const Credit = ({ credit }) => {
    console.log(credit)
    const { _id, img, name, title } = credit;
    return (
        <div className="w-11/12 md:w-full mx-auto ">
            <div className="credit-card bg-gray-100 hover:bg-green-600 hover:text-white px-4 pt-3 text-center">
                <img className='w-full h-96 md:h-72 rounded-lg mb-3 ' src={img} alt="img" />
                <h2 className="text-xl font-bold uppercase">{name}</h2>
                <p className='font-semibold uppercase mb-8'>{title}</p>
                <div className="card-actions justify-center pb-4">
                    <Link to={`/credit/${_id}`} className="btn btn-outline border-2 hover:bg-white hover:text-black rounded-b-3xl w-full"><span className='font-bold'>See More</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Credit;