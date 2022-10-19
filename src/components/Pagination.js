import React from 'react';
import { AiOutlineHome, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Pagination = () => {
    return (
        <div className='flex items-center justify-between mx-3 my-2'>
            <h5 className='text-sm'>
                Showing
                <span className='text-ms font-bold'> 1 </span>
                to
                <span className='text-ms font-bold'> 25 </span>
                of
                <span className='text-ms font-bold'> 8790 </span>
                entries
            </h5>
            <div className="btn-group">
                <button className="btn btn-outline btn-sm"><AiOutlineArrowLeft /></button>
                <button className="btn btn-outline btn-sm">1</button>
                <button className="btn btn-sm btn-gray-200">2</button>
                <button className="btn btn-outline btn-sm">3</button>
                <button className="btn btn-outline btn-sm">4</button>
                <button className="btn btn-outline btn-sm"><AiOutlineArrowRight /></button>
            </div>
        </div >
    );
};

export default Pagination;