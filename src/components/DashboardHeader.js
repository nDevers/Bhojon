import React from 'react';

const DashboardHeader = ({ icon, name }) => {
    return (
        <div className='flex items-center gap-x-4'>
            <span className='text-6xl'>{icon}</span>
            <span>{name}</span>
            {
                console.log(icon, name)
            }
        </div>
    );
};

export default DashboardHeader;