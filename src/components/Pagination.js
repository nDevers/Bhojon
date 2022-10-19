import React from 'react';
import { AiOutlineHome, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Pagination = () => {
    return (
        <div className='flex items-center justify-end'>
            <div className="btn-group mt-4">
                <button className="btn btn-outline btn-sm"><AiOutlineArrowLeft /></button>
                <button className="btn btn-outline btn-sm">1</button>
                <button className="btn btn-sm btn-gray-200">2</button>
                <button className="btn btn-outline btn-sm">3</button>
                <button className="btn btn-outline btn-sm">4</button>
                <button className="btn btn-outline btn-sm"><AiOutlineArrowRight /></button>
            </div>
        </div>
    );
};

export default Pagination;