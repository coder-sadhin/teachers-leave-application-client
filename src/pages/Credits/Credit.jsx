import React from 'react';

const Credit = ({ credit }) => {
    const { name, title, image, info } = credit;
    return (
        <div className="w-full">
            <div className="bg-gray-300 px-4 py-2">
                <img className='rounded-lg mt-[-40px] ' src={image} alt="img" />
                <h2 className=" text-2xl font-bold">{name}</h2>
            </div>
            <div className="bg-gray-100 px-4 pt-3">
                <p className='text-1xl font-semibold '>{title}</p>
                <p className='mt-4'>{info}</p>
                <div className="card-actions justify-center mt-4 pb-4">
                    <button className="btn btn-primary">See Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Credit;