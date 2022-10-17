import React from 'react';
import DashboardNavbar from '../../components/DashboardNavbar';
import Sidebar from '../../components/Sidebar';

const dashboard = () => {
    return (
        <div className='scrollbar-thin scrollbar-thumb-gray-400 h-screen overflow-y-scroll'>
            <DashboardNavbar />
            <Sidebar />
        </div>
    );
};

export default dashboard;