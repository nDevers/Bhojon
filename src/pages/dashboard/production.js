import React from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

const Production = () => {
    // set website title
    useWebsiteTitle('Dashboard | Production')

    return (
        <div>
            Production
        </div>
    );
};

export default Production;