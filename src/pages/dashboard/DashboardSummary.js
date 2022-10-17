import React from 'react';

const DashboardSummary = () => {
    const summaryData = [
        {
            name: 'Lifetime Orders',
            value: 1000
        },
        {
            name: 'Today Orders',
            value: 100
        },
        {
            name: 'Today Sell',
            value: 80
        },
        {
            name: 'Total Customer',
            value: 8000
        },
        {
            name: 'Total Delivered',
            value: 6000
        },
        {
            name: 'Total Reservation',
            value: 90
        }
    ];

    return (
        <div>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-x-4'>
                {
                    summaryData?.map(summary => <div className='p-3 bg-gray-200 rounded-md flex flex-col items-center justify-center text-center'>
                        <h2 className='text-3xl font-semibold'>{summary?.value}</h2>
                        <h3 className='text-lg font-medium'>{summary?.name}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DashboardSummary;