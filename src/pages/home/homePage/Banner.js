import React from 'react';
import bannerImage from '../../../assets/images/banner/bannerbackground2.png';

const Banner = () => {
    return (
        <div>
            <div className="bg-dark text-white border-0">
                <img
                    src={bannerImage}
                    height="400"
                    alt="Red Onion Foods banner image" />
            </div>
        </div>
    );
};

export default Banner;