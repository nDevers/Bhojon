import React from 'react';
import { Link } from 'react-router-dom';
import { SiFoodpanda } from "react-icons/si";

const Logo = ({ customClass = 'flex lg:hidden gap-x-3 items-center justify-center text-xl md:text-2xl lg:text-2xl text-center text-black-50 font-semibold font-mono uppercase pl-4' }) => {
    return (
        <Link className={customClass} to='/'>
            <SiFoodpanda />
            <span>
                <span className="text-red-500">B</span>hojon
            </span>
        </Link>
    );
};

export default Logo;