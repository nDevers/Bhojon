import React from 'react';
import ComingSoon from '../../../components/ComingSoon';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';

const CashRegisterReport = () => {
    // set website title
    useWebsiteTitle('Report | Cash Register Report')

    return (
        <div className='flex flex-col items-center justify-center'>

            <ComingSoon />
        </div>
    );
};

export default CashRegisterReport;