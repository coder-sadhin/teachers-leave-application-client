import React from 'react';

const Credits = () => {
    return (
        <div className="card w-96 ">
            <div className="bg-gray-400 mx-8 py-2">
                <img className='rounded-lg mt-[-50px] px-8' src="https://molina.imigrasi.go.id/assets/images/icon-profile.png" alt="Shoes" />
                <h2 className=" text-2xl font-bold px-8">Nasim Billha</h2>
            </div>
            <div className="bg-gray-200 px-8 mx-8 pt-3">
                <p className='text-1xl font-semibold '>Full Stack Web Developer</p>
                <p className='mt-4'>An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.</p>
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary">See Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Credits;