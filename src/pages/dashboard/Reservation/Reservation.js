import React from 'react';
import { Outlet } from 'react-router-dom';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';

const Reservation = () => {
    // set website title
    useWebsiteTitle('Dashboard | Reservation')

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Reservation;