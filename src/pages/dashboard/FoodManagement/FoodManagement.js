import React from 'react';
import { Outlet } from 'react-router-dom';

const FoodManagement = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default FoodManagement;