import React from 'react';
import { Outlet } from 'react-router-dom';

const UserManagement = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default UserManagement;