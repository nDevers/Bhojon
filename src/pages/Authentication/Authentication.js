import React from 'react';
import { Outlet } from 'react-router-dom';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';

const Authentication = () => {
    // set website title
    useWebsiteTitle('Bhojon | Authentication')

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Authentication;