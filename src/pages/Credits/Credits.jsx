import React from 'react';
import Credit from './Credit';

const Credits = () => {
    const credits = [
        {
            id: 1,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 2,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 3,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 4,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 5,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 6,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 7,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 8,
            name: 'Nasim Billha',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
    ]
    return (
        <div className='container mx-auto'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-gray-200  py-16'>
                {
                    credits.map(credit => <Credit
                        key={credit.id}
                        credit={credit}
                    ></Credit>)
                }
            </div>
        </div>
    );
};

export default Credits;