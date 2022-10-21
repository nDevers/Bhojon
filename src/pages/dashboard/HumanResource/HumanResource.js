import React from 'react';
import { Outlet } from 'react-router-dom';

const HumanResource = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default HumanResource;