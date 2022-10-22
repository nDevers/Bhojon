import React from 'react';
import { Outlet } from 'react-router-dom';

const Production = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Production;