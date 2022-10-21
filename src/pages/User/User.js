import React from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default User;