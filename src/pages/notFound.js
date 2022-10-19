import React from 'react';
import { SiFoodpanda } from 'react-icons/si';
import Navbar from '../components/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col h-screen justify-center items-center'>
                <SiFoodpanda className='text-5xl md:text-6xl lg:text-7xl text-black-50' />
                <h2 className='lg:text-9xl md:text-7xl text-6xl text-rose-400 font-bold font-mono mt-6 mb-8'>404</h2>
                <h3 className='lg:text-4xl md:text-3xl text-2xl text-slate-400 uppercase font-semibold mb-16'>Page Not Found!</h3>
                <a href='/' className="btn uppercase">Back to Home</a>
            </div>
        </div>
    );
};

export default NotFound;