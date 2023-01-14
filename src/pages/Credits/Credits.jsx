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
        <div className='container mx-auto'>
            <h1 className='text-2xl font-semibold text-center pt-8'>Members of Hero Team</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8'>
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