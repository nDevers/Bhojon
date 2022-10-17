import React from 'react';
import Navbar from '../../components/Navbar';

const home = () => {
    return (
        <div className='scrollbar-thin scrollbar-thumb-gray-400 h-screen overflow-y-scroll'>
            <Navbar />
        </div>
    );
};

export default home;