import React from 'react';
import comingSoonGif from '../assets/gifs/coming-soon.gif';

const ComingSoon = () => {
    return (
        <div className='w-2/3 md:2/3 lg:w-1/3'>
            <img src={comingSoonGif} alt="coming soon gif" />
        </div>
    );
};

export default ComingSoon;