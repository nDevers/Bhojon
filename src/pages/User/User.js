import React from 'react';
import { Outlet } from 'react-router-dom';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

const User = () => {
    // set website title
    useWebsiteTitle('Bhojon | User')

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default User;