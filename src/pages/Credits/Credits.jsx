import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { serverApi } from '../../ServerApi/ServerApi';
import Credit from './Credit/Credit';

const Credits = () => {
    const { data: credits = [], isLoading, refetch } = useQuery({
        queryKey: ['credits'],
        queryFn: async () => {
            const res = await fetch(`${serverApi}/credits`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Spinner />
    }
    console.log(credits);
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto py-14'>
            <h1 
                className='text-3xl font-semibold text-center pt-8 mb-5'
                data-aos="fade-left" data-aos-duration="2500"
                >Members of Hero Team</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8'>
                {
                    credits.map(credit => <Credit
                        key={credit._id}
                        credit={credit}
                    ></Credit>)
                }
            </div>
        </div>
    );
};

export default Credits;