import React from 'react';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Authentication;