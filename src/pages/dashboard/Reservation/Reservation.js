import React from 'react';
import { Outlet } from 'react-router-dom';

const Reservation = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Reservation;