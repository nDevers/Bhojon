import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-4 md:p-3 lg:p-3 mt-10 bg-gray-300 text-xs md:text-sm lg:text-sm text-base-content font-mono">
            <p className="flex items-center">
                Copyright <span>&copy; {currentYear}</span> - All right reserved
                by
                <Link to="/" className="ml-2">
                    <Logo customClass='flex gap-x-2 items-center justify-center text-md md:text-lg lg:text-lg text-center text-black-50 font-semibold uppercase' />
                </Link>
            </p>
        </footer>
    );
};

export default Footer;