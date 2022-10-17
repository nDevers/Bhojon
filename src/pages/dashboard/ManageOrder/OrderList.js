import React from 'react';

const OrderList = () => {
    return (
        <div className='border rounded-md flex flex-col gap-y-4'>
            <div className='flex items-center justify-end'>
                <h2>Order list</h2>

                <div className='flex items-center gap-x-4'>
                    <div className="form-control">
                        <label className="input-group input-group-sm">
                            <span>SM</span>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;