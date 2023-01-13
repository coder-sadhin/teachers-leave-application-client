import React from 'react';
import './Credit.css'

const Credit = ({ credit }) => {
    const { name, title, image, info, session } = credit;
    return (
        <div className="w-full ">
            {/* <div className="bg-gray-300 px-4 py-2">
                
            </div> */}
            <div className="credit-card bg-gray-100 hover:bg-green-600 hover:text-white px-4 pt-3 text-center">
                <img className='rounded-lg mb-3 ' src={image} alt="img" />
                <h2 className=" text-xl font-bold">{name}</h2>
                <p className='text-1xl font-semibold'>{title}</p>
                <p className=' mt-2'><strong>Session: {session}</strong></p>
                <div className="card-actions justify-center mt-4 pb-4">
                    <button className="btn btn-outline rounded-b-3xl w-full"><span className='font-bold'>See More</span></button>
                </div>
            </div>
        </div>
    );
};

export default Credit;