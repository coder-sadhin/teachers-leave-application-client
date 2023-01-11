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
            name: 'Md. Akkas Ali',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 3,
            name: 'MD. SADIKUL ISLAM',
            title: 'Full Stack Web Developer',
            image: 'https://scontent.fdac10-1.fna.fbcdn.net/v/t39.30808-6/271660281_3162565924069745_561461836450578292_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEaqsrTEBV3qB_vcS0-qz4Ve_-uM1UySdl7_64zVTJJ2SyoFdAY1cAxiVhgCQpd7bq0He5MumPfnpR7z9JrplrI&_nc_ohc=1FO--Kr3YrgAX_MsfJG&_nc_ht=scontent.fdac10-1.fna&oh=00_AfBI8AxTA-phHH9gvpjlZRnHgwvV43DfkGiQ2XAKkVnZDQ&oe=63C2648A',
            info: 'My name is Md. Sadikul Islam and I are a Web Developer from Rajshahi, Bangladesh. I am a student studying for a Diploma in Computer Engineering at Rajshahi Polytechnic Institute. I am eager to know and learn new things. I enjoy programming and working with web technologies. Recently, I have a good understanding of Front-end Web Development. Also, I am focusing on learning MERN Stack Web Development and trying to implement it in building projects.'
        },
        {
            id: 4,
            name: 'Najmus Sakib',
            title: 'Full Stack Web Developer',
            image: 'https://scontent.fdac10-1.fna.fbcdn.net/v/t39.30808-6/323317716_539322434800790_7198067969159650825_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGuX8Xvp0kvc7rqBWUYWS9qsB4rXaqIRIKwHitdqohEglDl-VWFLz1vncOXBIIt7YyVonm7KcvTTmWGqT0IlyG0&_nc_ohc=Tig2g_eiqwIAX8BvGBU&_nc_ht=scontent.fdac10-1.fna&oh=00_AfAvRjpvBkbjZt7m1xy2PEoGJhAVanPgOCCqhZOhz6enOA&oe=63C2A7CF',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 5,
            name: 'Md. Mehedi Hasan Durjoy',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
        {
            id: 6,
            name: 'Ajadujjaman Prodhan',
            title: 'Full Stack Web Developer',
            image: 'https://molina.imigrasi.go.id/assets/images/icon-profile.png',
            info: 'An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.'
        },
    ]
    return (
        <div className='container mx-auto'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200  py-16'>
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