import React from 'react';
import { Outlet } from 'react-router-dom';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';

const ManageOrder = () => {
    // set website title
    useWebsiteTitle('Dashboard | Manage Order')

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default ManageOrder;